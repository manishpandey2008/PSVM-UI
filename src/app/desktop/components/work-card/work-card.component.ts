import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { ConformationComponent } from '../conformation/conformation.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;
  @ViewChild(ConformationComponent) conformation!:ConformationComponent;

  formEntity!: FormEntity;

  data:any=[]
  deleteRequestData:any;

  constructor(private jsonService:JsonApiService,
              private http:HttpClient,
              private api:ApiControlService,
              private router:Router) { }

  ngOnInit(): void {
    this.jsonService.fetch<FormEntity>('work-card').subscribe(entity => {
      this.formEntity=entity;
     this.getCradData()
    })
  }

  getCradData(){
    this.api.list(this.formEntity.targetLink).subscribe(resp=>{
      this.data=resp
    })
  }

  open(data:any){
      this.router.navigate(["/dashboard/work-list",data.id])
  }

  edit(card:any){
    this.form.show(true,this.formEntity,card)
  }

  addNew(){
    this.form.show(true,this.formEntity)
  }

  deleteRequest(card:any){
    this.deleteRequestData=card
    this.conformation.show("Are you sure to remove this work card :-"+card.chartName)
  }

  deleteItem(status:boolean){
   if(status){
    this.api.delete(this.formEntity.targetLink+"/"+this.deleteRequestData.id).subscribe(resp=>{
        this.getCradData()
    })
   }
  }
}
