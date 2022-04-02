import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiControlService } from 'src/app/service/api-control.service';
import { AuthService } from 'src/app/service/auth.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-price-limit',
  templateUrl: './price-limit.component.html',
  styleUrls: ['./price-limit.component.css']
})
export class PriceLimitComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  pinCode={layout:'price',header:"Labour",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-green-100",textAlingment:"text-center"}

  allPriceLimits:any;
  isShow=false;
  allTaskList:any;
  min:any=0;

  formGroup:FormGroup=new FormGroup({
    taskId: new FormControl('',Validators.required),
    username:new FormControl(this.auth.getUserName(),Validators.required),
    minPrice:new FormControl('',[Validators.required,Validators.min(this.min)])
  })

  constructor(private api:ApiControlService,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getTakValue(data:any){
    let val=this.allTaskList.filter((e:any)=>e.id==data.value)[0]
    this.min=val.taskMinPrice
  }

  getListByUser(){
    let username=this.auth.getUserName();
    this.api.get("api/labour-price/username/"+username).subscribe(resp=>{
      this.allPriceLimits=resp
      this.isShow=true;
     })
  }

  getAllData(){
    this.getListByUser();
     this.api.get("api/task/").subscribe(resp=>{
      this.allTaskList=resp
     })
  }

  save(){
    if(this.formGroup.valid){
      console.log(this.formGroup)
      this.api.post("api/labour-price/",this.formGroup.value).subscribe(resp=>{
        this.getListByUser()
      })
    }else{
      alert("Form data is not valid")
    }
  }

  updatePriceLimit(item:any){
    if(item.minPrice<item.centerPrice){
      alert("Please add max price than "+item.centerPrice+" for "+item.taskName+". Thank you")
      return;
    }
    this.api.post("api/labour-price/",item).subscribe(resp=>{
      this.getListByUser()
      alert("Congratulation !! your new price is "+item.minPrice +" for "+item.taskName)
    })
  }

  deletePriceLimit(item:any){
    this.api.delete("api/labour-price/"+item.id).subscribe(resp=>{
      this.getListByUser()
      alert("Your "+item.taskName +" Task deleted from your task list")
    })
  }

  openForm(){
    this.form.ishowForm(true);
  }
}
