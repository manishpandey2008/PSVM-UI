import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labour',
  templateUrl: './labour.component.html',
  styleUrls: ['./labour.component.css']
})
export class LabourComponent implements OnInit {

  header=[{label:"Name",fieldName:"name"},
          {label:"Phone number",fieldName:"phoneNumber"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
          {label:"Email",fieldName:"email"},
        ]
  data=[{name:"Manish Pandey",phoneNumber:'9876543212','email':'smpandey.2008@gmail.com'},
        {name:"Balmukund Pandey",phoneNumber:'7686545432','email':'manish.2008@gmail.com'},
        {name:"Avinash Pandey",phoneNumber:'7658765454','email':'avinash.2008@gmail.com'},
        {name:"Totu Pandey",phoneNumber:'2345345676','email':'totu.2008@gmail.com'}]

  constructor() { }

  ngOnInit(): void {
  }

}
