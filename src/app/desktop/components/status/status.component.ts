import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() formGroup!:FormGroup;
  @Input() field!:any;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusVal(status:string){

  }

}
