import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiControlService } from 'src/app/service/api-control.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStoreService } from 'src/app/service/local-store.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @ViewChild(FormComponent) form!:FormComponent;

  formGroup:FormGroup=new FormGroup({
    username:new FormControl(this.auth.getUserName(),[Validators.required]),
    pinCode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
    village:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    postOffice:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    address:new FormControl('',[Validators.maxLength(155)]),
    activeStatus:new FormControl('Inactive',[Validators.required])
  })

  constructor(private local:LocalStoreService,private api:ApiControlService,private auth:AuthService) { }

  userData:any

  ngOnInit(): void {
    let username=this.local.getLocalStorageValue("user")
    this.getData(username);
  }
  getData(username:any){
    this.api.get("api/user/username/"+username).subscribe(resp=>{
      this.userData=resp
    })
  }

  openForm(){
    this.form.ishowForm(true)
  }

}
