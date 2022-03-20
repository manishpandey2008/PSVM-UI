import { Component, Input, OnInit } from '@angular/core';
import { List } from 'echarts';
import { LoginComponent } from 'src/app/login/login.component';
import { FormEntity } from 'src/app/model/form-entity';
import { TableEntity } from 'src/app/model/table-entity';
import { ApiControlService } from 'src/app/service/api-control.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  header:any[]=[];
  data:any[]=[];
  isShow=false
  selectedRow=-1
  formEntity!:FormEntity
  storeMap:Map<string,any[]>=new Map()

  constructor(private api:ApiControlService) { }

  ngOnInit(): void {
  }

  show(field:FormEntity,data?:any){
    this.formEntity=field
    this.header=field.tableCols
    this.storeage(field.needStore)
    this.getTableData()
  }


  storeage(storeList:any[]){
    storeList.forEach(e=>{
      this.api.list(e.storeUrl).subscribe(resp=>{
        this.storeMap.set(e.storeName,resp);
      })
    })
  }

  getStoreData(fieldName:any,value:any){
    let list:any=this.storeMap.get(fieldName.store)
    list.forEach((e:any) => {
      if(e['id']==Number(value)){
        return e[fieldName.neededField]
      }
    });
  }

  getTableData(){
    this.api.list(this.formEntity.targetLink).subscribe(resp=>{
      this.isShow=true
      this.data=resp
    })
  }
}
