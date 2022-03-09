import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-top-nav',
  templateUrl: './mobile-top-nav.component.html',
  styleUrls: ['./mobile-top-nav.component.css']
})
export class MobileTopNavComponent implements OnInit {

@Output() toggle:any=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle(){
    this.toggle.emit()
  }
}
