import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiControlService } from 'src/app/service/api-control.service';
import { AuthService } from 'src/app/service/auth.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  pinCode={layout:'location',header:"Youe permanent location",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-green-100",textAlingment:"text-center"}

  allPinCode:any;
  isShow=false;
  editFlag=false;
  editItem:any;

  formGroup:FormGroup=new FormGroup({
    username:new FormControl(this.auth.getUserName(),[Validators.required]),
    pinCode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
    village:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    postOffice:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    address:new FormControl('',[Validators.maxLength(155)]),
    activeStatus:new FormControl('Inactive',[Validators.required])
  })


  constructor(private api:ApiControlService,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    let username=this.auth.getUserName();
    this.api.get("api/pincode/username/"+username).subscribe(resp=>{
      this.allPinCode=resp
      this.isShow=true;
     })
  }

  openForm(){
    this.formGroup.reset()
    this.form.ishowForm(true)
  }

  openInEdit(item:any){
    this.editItem=item;
    this.editFlag=true;
    this.formGroup.patchValue(item)
    this.form.ishowForm(true)
  }

  save(){
    if(this.formGroup.valid){
      if(this.editFlag){this.formGroup.addControl('id',new FormControl(this.editItem.id))}
      this.api.post("api/pincode/",this.formGroup.value).subscribe(resp=>{
        this.allPinCode=resp
        this.getAllData()
        this.editFlag=false;
       })
    }else{
      alert("Your form data is not valid")
    }
  }

}
