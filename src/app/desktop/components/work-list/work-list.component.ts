import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;
  @ViewChild(TableComponent) table!:TableComponent;

  data:any=[]

  formEntity!:FormEntity;
  id:any;
  workCardData:any;
  isShow=false

  constructor(private jsonService:JsonApiService,
              private route:ActivatedRoute,
              private api:ApiControlService
          ) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.workListData()
    this.jsonService.fetch<FormEntity>('work-list').subscribe(entity => {
      this.formEntity=entity;
    })
  }

  workListData(){
    this.api.get("api/chart/"+this.id).subscribe(resp=>{
      this.workCardData=resp
      this.isShow=true
      this.table.show(this.formEntity,"chart/",this.id)
    })
  }

  addNew(){
    this.form.show(true,this.formEntity,undefined,this.id)
  }

  feedBack(event:any){
    if(event){
      this.workListData()
    }
  }
}
