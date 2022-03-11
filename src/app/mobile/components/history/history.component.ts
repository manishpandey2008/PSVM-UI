import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

pinCode={layout:'history',header:"Youe permanent location",chageButtonUrl:"",chageButtonText:"",
            headerColor:"bg-green-100",textAlingment:"text-left",paymentStatus:'yes'}

 pinCod1={layout:'history',header:"Youe permanent location",chageButtonUrl:"",chageButtonText:"",
            headerColor:"bg-green-100",textAlingment:"text-left",paymentStatus:'no'}

  pinCod2={layout:'history',header:"Youe permanent location",chageButtonUrl:"",chageButtonText:"",
            headerColor:"bg-green-100",textAlingment:"text-left",paymentStatus:'none'}

  constructor() { }

  ngOnInit(): void {
  }

}
