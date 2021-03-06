import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormEntity } from 'src/app/model/form-entity';
import { JsonApiService } from 'src/app/service/json-api.service';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-govt-yojana',
  templateUrl: './govt-yojana.component.html',
  styleUrls: ['./govt-yojana.component.css']
})
export class GovtYojanaComponent implements OnInit {
  @ViewChild(FormComponent) form!:FormComponent;
  @ViewChild(TableComponent) table!:TableComponent;

  data=[{firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"},
  {firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"},
  {firstName:"Manish",lastName:"Pandey",phone:'9876543212',email:'smpandey.2008@gmail.com',address:"Kota"}]

  formEntity!:FormEntity;

  constructor(private jsonService:JsonApiService,private http:HttpClient) {
  }

  ngOnInit(): void {
    this.jsonService.fetch<FormEntity>('yojana').subscribe(entity => {
      this.formEntity=entity;
      this.table.show(entity)
    })
  }

  addNew(){
    this.form.show(true,this.formEntity)
  }


}
