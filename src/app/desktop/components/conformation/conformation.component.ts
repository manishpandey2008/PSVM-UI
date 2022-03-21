import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {

  @Output() response=new EventEmitter;

  isView=false
  message="none"

  constructor() { }

  ngOnInit(): void {
  }

  show(message:any){
    this.message=message
    this.isView=true
  }

  responseDialog(status:boolean){
    this.isView=false
    this.response.emit(status)
  }
}
