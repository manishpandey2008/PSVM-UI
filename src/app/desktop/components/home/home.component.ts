import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardData=[
    {title:"Departments",styleCss:"text-green-900",url:"/department",svgType:"department",totalCount:10},
    {title:"Employees",styleCss:"text-blue-800",url:"/employee",svgType:"employee",totalCount:40},
    {title:"Files",styleCss:"text-fuchsia-900",url:"/file",svgType:"file",totalCount:200},
    {title:"Completed Files",styleCss:"text-green-900",url:"/file",svgType:"file",totalCount:110},
    {title:"Pending Files",styleCss:"text-yellow-800",url:"/file",svgType:"file",totalCount:80},
    {title:"Rejected Files",styleCss:"text-red-800",url:"/file",svgType:"file",totalCount:10}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getValue(){
    // this.homeservice.getVal().subscribe(x=>{
    //     console.log("data",x)
    // })
  }
}
