import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { Option } from '../../../model/option'

@Component({
  selector: 'app-view-formate',
  templateUrl: './view-formate.component.html',
  styleUrls: ['./view-formate.component.css'],
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
export class ViewFormateComponent implements OnInit {

  isVisible = false;
  showOverlay = false;
  disabled=false
  formEntity!:FormEntity
  formGroup!:FormGroup
  showValidationErrors=false
  formControls:Map<string, FormControl>=new Map<string, FormControl>();
  dataSet: Map<string, Option[]> = new Map();
  districtStateData=[]

  formData:any;

  constructor(private fb:FormBuilder,private api:ApiControlService,private jsonApi:JsonApiService) { }

  ngOnInit(): void {
  }


  show(status:any,fields:FormEntity,data?:any){
    this.formEntity=fields
    this.showOverlay = status;
    this.isVisible = status;
    this.formData=data
    this.buildForm(fields)
    this.formGroup.patchValue(data)
  }

  buildForm(fields:any){
    const form:FormGroup=new FormGroup({});
    for(let field of this.formEntity.fields){
      const formControl = new FormControl();
      // formControl.
      this.formControls.set(field.fieldName,formControl)
      form.addControl(field.fieldName,new FormControl(''));
    }
    this.formGroup=form;
  }


  hide(status:boolean) {
    this.isVisible = false;
    this.showOverlay=false
  }

  animEnd($event: any) {
    this.showOverlay = this.isVisible;
  }


}
