import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true


  constructor() { }

  ngOnInit(): void {
  }

  changeFormate(){
    console.log(this.viewPasswod)
    if(this.viewPasswod){this.viewPasswod=false;this.inputFormate="text"}
    else{this.viewPasswod=true;this.inputFormate="password"}
  }
}
