import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { LocalStoreService } from 'src/app/service/local-store.service';
import { Option } from '../../../model/option'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(100%)' })),
      transition('* => closed', [animate('300ms ease-in-out')]),
      transition('* => open', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out'),
      ]),
    ]),
  ],
})
export class FormComponent implements OnInit {

  isVisible = false;
  showOverlay = false;
  disabled=false
  formEntity!:FormEntity
  formGroup!:FormGroup
  showValidationErrors=false
  formControls:Map<string, FormControl>=new Map<string, FormControl>();
  dataSet: Map<string, Option[]> = new Map();
  districtStateData=[]
  parent:any;

  @Output() feedBack=new EventEmitter;

  formData:any;

  constructor(private api:ApiControlService,private jsonApi:JsonApiService,
              private local:LocalStoreService) { }

  ngOnInit(): void {
  }


  show(status:any,fields:FormEntity,data?:any,parent?:any){
    this.formEntity=fields
    this.showOverlay = status;
    this.isVisible = status;
    this.buildForm(fields)
    this.dataSetup(fields)
    this.parent=parent;
    if(data){
      this.formData=data;
      this.formEntity.fields.forEach(e => {
        if(e.inputType=='date'){
          data[e.fieldName]=new Date(data[e.fieldName]).toISOString().substr(0, 10);
        }
      });

      this.formGroup.patchValue(data)
    }
  }

  buildForm(fields:any){
    const form:FormGroup=new FormGroup({});
    for(let field of this.formEntity.fields){
      const formControl = new FormControl();
      // formControl.
      this.formControls.set(field.fieldName,formControl)
      form.addControl(field.fieldName,new FormControl('',this.addValidation(field)));
    }
    this.formGroup=form;
  }

  addValidation(field:any):any[]{
    const validations = [];
    if (field.required) {
      validations.push(Validators.required);
    }
    return validations;
  }

  dataSetup(fields:any){
    for(let field of this.formEntity.fields){
      let currentData:Option[]=[]
      if(field.apiData){
        this.api.list(field.apiData).subscribe((resp:any[])=>{
          resp.forEach(e=>{currentData.push({value:e.id,label:e[field.selectLabel]})})
          this.dataSet.set(field.fieldName,currentData);
        })
      }else if(field.jsonData){
        this.jsonApi.fetchStateDistrictList(field.jsonData).subscribe((resp:any)=>{
            this.districtStateData=resp.states
            resp.states.forEach((e:any)=>{currentData.push({value:e.state,label:e.state})})
            this.dataSet.set(field.fieldName,currentData);
        })
      }
    }
  }

  chengedData(field:any){
    if(field.changed){
      let currentData:Option[]=[]
      let filterDistrict:any=this.districtStateData.filter((e:any)=>e.state==this.formGroup.value[field.fieldName])[0]
      filterDistrict.districts.forEach((e:any) => {currentData.push({value:e,label:e})});
      this.dataSet.set(field.changed,currentData);
    }
  }



  saveForm(){
    if(!this.formGroup.valid){
      this.showValidationErrors=true
      alert("Your form data is not valid:"+this.formGroup.errors)
      return;
    }
    if(this.formData){
      this.formGroup.addControl('id',new FormControl(this.formData.id))
    }
    if(this.parent){
      this.formGroup.addControl('chartId',new FormControl(this.parent))
    }
    if(this.formEntity.currentId){
      this.formGroup.addControl(this.formEntity.currentId,new FormControl(this.local.getLocalStorageObject("centerId")))
    }
    if(this.formEntity.roles){
      this.formGroup.addControl('roles',new FormControl([{name:this.formEntity.roles}]))
    }

    console.log(this.formGroup.value)

    this.api.post(this.formEntity.targetLink,this.formGroup.value).subscribe(resp=>{
      alert("Your form is submited successfully")
      this.feedBack.emit(true)
      this.hide(false);
    })
  }



  hide(status:boolean) {
    this.isVisible = false;
    this.showOverlay=false
  }

  animEnd($event: any) {
    this.showOverlay = this.isVisible;
  }

}
