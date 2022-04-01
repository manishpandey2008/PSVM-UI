import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() data:any;
  @Input() checked!:boolean;

  collapse=false

  constructor() { }

  ngOnInit(): void {
  }

}
