import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldEntity } from 'src/app/model/field.entity';
import { FormEntity } from 'src/app/model/form-entity';

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

  isVisible = false;
  showOverlay = false;
  disabled=false
  formEntity!:FormEntity
  formGroup!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  show(status:any,fields:FormEntity,data?:any){
    this.formEntity=fields
    this.showOverlay = status;
    this.isVisible = status;
  }

  hide(status:boolean) {
    this.isVisible = false;
    this.showOverlay=false
  }
  animEnd($event: any) {
    this.showOverlay = this.isVisible;
  }

}
