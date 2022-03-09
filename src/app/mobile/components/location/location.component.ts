import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild(FormComponent) form!:FormComponent;

  pinCode={layout:'location',header:"Youe permanent location",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-green-100",textAlingment:"text-center"}
  pinCode2={layout:'location',header:"Local location",chageButtonUrl:"",chageButtonText:"",headerColor:"bg-gray-300",textAlingment:"text-center"}

  constructor() { }

  ngOnInit(): void {
  }

  openForm(data?:any){
    this.form.ishowForm(true)
  }

}
