import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @Output() addNew=new EventEmitter;

  rotate=false
  constructor() { }

  ngOnInit(): void {
  }

  addNuewForm(){
    this.addNew.emit()
  }

}
