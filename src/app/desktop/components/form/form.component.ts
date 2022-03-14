import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(100%)' })),
      transition('* => closed', [animate('300ms ease-in-out')]),
      transition('* => open', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out'),
      ]),
    ]),
  ],
})
export class FormComponent implements OnInit {

  constructor() { }


  isVisible = false;
  showOverlay = false;
  disabled=false

  ngOnInit(): void {
  }

  animEnd($event: any) {
    this.showOverlay = this.isVisible;
  }

  show(status:any){
    this.showOverlay = true;
    this.isVisible = true;
    this.disabled=false
  }

  hide(status:boolean) {
    this.isVisible = false;
    this.showOverlay=false
  }


}
