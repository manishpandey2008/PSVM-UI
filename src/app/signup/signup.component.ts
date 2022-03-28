import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sortBy } from 'lodash';
import { ApiControlService } from '../service/api-control.service';
import { JsonApiService } from '../service/json-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true
  districtList:any;
  filterDistrict:any;
  allcenterList:any;

  formGroup=new FormGroup({
    userFirstName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    userLastName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    userEmail:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.email]),
    userPhone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    pinCode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
    state:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    district:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    village:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    post:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    fullAddress:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    centerId:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    roles:new FormControl([{}],Validators.required),
    username:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
  })

  // activateCode:new FormControl(''),
  // accountActiveStatus:new FormControl(''),
  // currentActiveStatus:new FormControl(''),

  constructor(private api:ApiControlService,private jsonApiService:JsonApiService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllData();
  }


  getAllData(){
    this.jsonApiService.fetchStateDistrictList("district").subscribe((resp:any)=>{
      this.districtList=sortBy(resp.states, (o) => +o.state);
    })
    this.api.list("api/center/").subscribe(resp=>{
      this.allcenterList=resp
    })
  }

  getDistrict(){
    console.log(this.districtList)
    let districtData=this.districtList.filter((s:any)=>s.state===this.formGroup.value.state)[0];
    this.filterDistrict=sortBy(districtData.districts, (o) => +o.state);
  }

  saveProfile()
  {
    if(this.formGroup.valid){
      this.formGroup.value.roles=[{"name":this.formGroup.value.roles}]
      this.api.postWithoutToken('api/user/new',this.formGroup.value).subscribe(e=>{
        this.router.navigate(["login"])
      })
    }
  }

  changeFormate(){
    if(this.viewPasswod){this.viewPasswod=false;this.inputFormate="text"}
    else{this.viewPasswod=true;this.inputFormate="password"}
  }

}
