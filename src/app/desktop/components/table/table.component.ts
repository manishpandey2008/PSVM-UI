import { Component, Input, OnInit } from '@angular/core';
import { FormEntity } from 'src/app/model/form-entity';
import { TableEntity } from 'src/app/model/table-entity';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  header:any[]=[];
  data:any[]=[];
  isShow=false
  constructor() { }

  ngOnInit(): void {
  }

  show(field:FormEntity,data:any){
    this.header=field.tableCols
    this.data=data
    this.isShow=true
  }


}
