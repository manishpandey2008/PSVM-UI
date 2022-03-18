import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiControlService } from '../service/api-control.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true

  formGroup=new FormGroup({
    userFirstName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    userLastName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    userEmail:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.email]),
    userPhone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    roles:new FormControl([{}],Validators.required),
    username:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
  })

  // activateCode:new FormControl(''),
  // accountActiveStatus:new FormControl(''),
  // currentActiveStatus:new FormControl(''),

  constructor(private api:ApiControlService) { }

  ngOnInit(): void {
  }


  saveProfile()
  {
    if(this.formGroup.valid){
      this.formGroup.value.roles=[{"name":this.formGroup.value.roles}]
      this.api.postWithoutToken('api/user/new',this.formGroup.value).subscribe(e=>{
        console.log(this.formGroup.value)
      })
    }
  }


  changeFormate(){
    console.log(this.viewPasswod)
    if(this.viewPasswod){this.viewPasswod=false;this.inputFormate="text"}
    else{this.viewPasswod=true;this.inputFormate="password"}
  }

}
