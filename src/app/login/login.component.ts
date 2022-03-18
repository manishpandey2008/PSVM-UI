import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiControlService } from '../service/api-control.service';
import { LocalStoreService } from '../service/local-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true

  formGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })


  constructor(private api:ApiControlService,private router:Router,private localStore:LocalStoreService) { }

  ngOnInit(): void {
  }

  changeFormate(){
    console.log(this.viewPasswod)
    if(this.viewPasswod){this.viewPasswod=false;this.inputFormate="text"}
    else{this.viewPasswod=true;this.inputFormate="password"}
  }

  login(){
     if(this.formGroup.valid){
      try{
          this.api.post('api/user/authentication',this.formGroup.value).subscribe(resp=>{
            if(resp.access_token!==null){
              this.localStore.setLocalStorage("token",resp.access_token)
              this.router.navigate(['/dashboard/home'])
            }else{
            alert("Please login again")
            }
          })
        }catch{
            alert("Please login again")
        }
     }
  }
}
