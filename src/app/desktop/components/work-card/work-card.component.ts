import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  formEntity!: FormEntity;

  data:any=[]

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
}
