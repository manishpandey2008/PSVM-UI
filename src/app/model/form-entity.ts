import { FieldEntity } from "./field.entity";
import { TableEntity } from "./table-entity";

export class FormEntity{
  title!:String;
  width!:String;
  entity!:String;
  targetLink!:string;
  fields:FieldEntity[]=[];
  tableCols:TableEntity[]=[];
  needStore:any[]=[];
}
