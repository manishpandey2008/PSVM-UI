import { Component, OnInit } from '@angular/core';
import { ApiControlService } from 'src/app/service/api-control.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.css']
})
export class MobileHomeComponent implements OnInit {


  toggle=false
  items=[1,2,3,4,5,6]
  allYojana:any;

  pinCode={layout:'home',header:"Youe current location",chageButtonUrl:"/mobile/dashboard/location",chageButtonText:"Change",headerColor:"bg-gray-300",textAlingment:"text-center"}
  govtYojna={layout:'home',header:"श्रम योजना",chageButtonUrl:"none",chageButtonText:"",headerColor:"bg-gray-300",textAlingment:"text-left"}
  workUpdate={layout:'home',header:"Current work status",chageButtonUrl:"none",chageButtonText:"",headerColor:"bg-gray-300",textAlingment:"text-center"}

  constructor(private api:ApiControlService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.get("api/yojana/").subscribe(resp=>{
        this.allYojana=resp
    })
  }
  toggleResponse(result:any){
    this.toggle=result;
  }

}
