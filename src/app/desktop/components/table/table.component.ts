import { Component, OnInit, ViewChild } from '@angular/core';
import { FormEntity } from 'src/app/model/form-entity';
import { ApiControlService } from 'src/app/service/api-control.service';
import { ConformationComponent } from '../conformation/conformation.component';
import { FormComponent } from '../form/form.component';
import { ViewFormateComponent } from '../view-formate/view-formate.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

@ViewChild(FormComponent) form!:FormComponent;
@ViewChild(ViewFormateComponent) viewFormateComponent!:ViewFormateComponent;
@ViewChild(ConformationComponent) conformation!:ConformationComponent;

  header:any[]=[];
  data:any[]=[];
  isShow=false
  selectedRow=-1
  formEntity!:FormEntity
  storeMap:Map<string,any[]>=new Map()
  deleteRequestData:any;
  parentId:any;
  parentLink:any;

  constructor(private api:ApiControlService) { }

  ngOnInit(): void {
  }

  show(field:FormEntity,parentLink?:any,parentId?:any){
    this.formEntity=field
    this.header=field.tableCols
    this.parentId=parentId
    this.parentLink=parentLink
    this.storeage(field.needStore)
  }


  async storeage(storeList:any[]){
   storeList.forEach(e=>{
      this.api.list(e.storeUrl).subscribe(resp=>{
        this.storeMap.set(e.storeName,resp);
      })
    })
    if(this.parentId){
      this.getTableChieldData()
    }else{
      this.getTableData()
    }
  }
  getTableData(){
    this.api.list(this.formEntity.targetLink).subscribe(async resp=>{
      this.data=resp
      this.isShow=true
    })
  }

  getTableChieldData(){
    this.api.list(this.formEntity.targetLink+this.parentLink+this.parentId).subscribe(async resp=>{
      this.data=resp
      this.isShow=true
    })
  }

  getStoreData(fieldName:any,value:any){
    let list:any=this.storeMap.get(fieldName.store)
    let result="None"
   if(list && list!=null){
    list.forEach((e:any) => {
      if(e['id']==Number(value)){
        result=e[fieldName.neededField];
      }
    })
   }
    return result
  }

  openEditForm(data:any){
    this.form.show(true, this.formEntity,data)
  }

  openView(data:any){
    this.viewFormateComponent.show(true, this.formEntity,data)
  }

  deleteRequest(data:any){
    this.deleteRequestData=data
    this.conformation.show("Are you sure to remove this center :-"+data.centerName)
  }

  deleteItem(status:true){
    if(status){
      this.api.delete(this.formEntity.targetLink+this.deleteRequestData.id).subscribe(resp=>{
        this.isShow=false
        this.show(this.formEntity)
      })
    }
  }

  feedBack(event:any){
    this.isShow=false
    this.show(this.formEntity)
  }

}
