import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;
  @ViewChild(TableComponent) table!:TableComponent;

  data=[{firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"},
  {firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"},
  {firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"}]

  formEntity!:FormEntity;

  constructor(private jsonService:JsonApiService,private http:HttpClient,private api:ApiControlService) {
  }

  ngOnInit(): void {
    this.jsonService.fetch<FormEntity>('center').subscribe(entity => {
      this.formEntity=entity;
      this.table.show(entity)
    })
  }

  getLoabourData(){
  }

  addNew(){
    this.form.show(true,this.formEntity)
  }

}
