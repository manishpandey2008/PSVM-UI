import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-price-limit',
  templateUrl: './price-limit.component.html',
  styleUrls: ['./price-limit.component.css']
})
export class PriceLimitComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  pinCode={layout:'price',header:"Labour",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-green-100",textAlingment:"text-center"}
  pinCode2={layout:'price',header:"Carpenter",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-green-100",textAlingment:"text-center"}


  constructor() { }

  ngOnInit(): void {
  }

  openForm(){
    this.form.ishowForm(true);
  }

}
