import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiControlService } from 'src/app/service/api-control.service';
import { LocalStoreService } from 'src/app/service/local-store.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true

  formGroup=new FormGroup({
    activationCode:new FormControl('',[Validators.required])
  })



  constructor(private bpo: BreakpointObserver,private router:Router,private api:ApiControlService,
              private localStore:LocalStoreService,private auth:AuthService) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(){
    this.bpo.observe(['(min-width: 585px)'])
    .subscribe(result => {
        if (result.matches) {
          this.router.navigate(['/mobile/not-allowed'])
        }
    });
  }

  login(){

    if(this.formGroup.valid){
      try{
          this.api.postWithoutToken('api/user/activation-code/login',this.formGroup.value).subscribe(resp=>{
            if(resp.access_token!==null){
              this.localStore.setLocalStorage("token",resp.access_token)
              this.storeUserDetails()
              if(this.auth.hasClaim("LOBOUR")){
                this.router.navigate(['mobile','dashboard','home']);
              }else if(this.auth.hasClaim("ADMIN") || this.auth.hasClaim("MANAGER")){
                this.router.navigate(['not-allowed'])
              }else{
                this.router.navigate(['not-allowed'])
              }
            }else{
            alert("Please login again")
            }
          })
        }catch{
            alert("Please login again")
        }
     }
  }

  storeUserDetails(){
    this.api.get('api/user/username/'+this.auth.getUserName()).subscribe(resp=>{
      this.localStore.setLocalStorage("user",resp.username)
    })
  }

}
