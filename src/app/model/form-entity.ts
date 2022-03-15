import { FieldEntity } from "./field.entity";
import { TableEntity } from "./table-entity";

export class FormEntity{
  title?:String;
  width?:String;
  entity?:String;
  fields?:FieldEntity[];
  tableCols?:TableEntity;
}
