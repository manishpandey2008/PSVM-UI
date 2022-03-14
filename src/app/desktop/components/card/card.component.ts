import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardData:any;

  constructor() { }

  ngOnInit(): void {
  }

  onCardCliCK(url:string){
    console.log(url)
  }


}
