import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/base/base.component';
import { FieldEntity } from 'src/app/model/field.entity';
import { FormEntity } from 'src/app/model/form-entity';
import { JsonApiService } from 'src/app/service/json-api.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-labour',
  templateUrl: './labour.component.html',
  styleUrls: ['./labour.component.css']
})
export class LabourComponent extends BaseComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  header=[{label:"Name",fieldName:"name"},
          {label:"Phone number",fieldName:"phoneNumber"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
        ]
  data=[{name:"Manish Pandey",phoneNumber:'9876543212','email':'smpandey.2008@gmail.com'},
        {name:"Balmukund Pandey",phoneNumber:'7686545432','email':'manish.2008@gmail.com'},
        {name:"Avinash Pandey",phoneNumber:'7658765454','email':'avinash.2008@gmail.com'}]

  constructor(private jsonService:JsonApiService,private http:HttpClient) {
    super();
  }

  ngOnInit(): void {

  }

  addNew(){
    this.jsonService.fetch<FormEntity>('form-data').subscribe(entity => {
      this.form.show(true,entity)
    })
  }

}
