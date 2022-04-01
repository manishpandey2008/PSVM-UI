import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formResp=new EventEmitter;

  constructor() { }

  isShow=false

  ngOnInit(): void {
  }

  ishowForm(data:any){
    this.isShow=data
  }

  saveData(){
    this.formResp.emit(true);
    this.isShow=false
  }

}
