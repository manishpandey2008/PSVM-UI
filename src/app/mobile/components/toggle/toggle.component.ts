import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Output() toggleResponse:any=new EventEmitter;
  toggle=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeToggle(){
    this.toggle=!this.toggle
    this.toggleResponse.emit(this.toggle)
  }

}
