import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  inputFormate="password"
  viewPasswod=true


  constructor(private bpo: BreakpointObserver,private router:Router) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(){
    this.bpo.observe(['(min-width: 585px)'])
    .subscribe(result => {
        if (result.matches) {
          this.router.navigate(['/mobile/not-allowed'])
        }
    });
  }


  changeFormate(){
    console.log(this.viewPasswod)
    if(this.viewPasswod){this.viewPasswod=false;this.inputFormate="text"}
    else{this.viewPasswod=true;this.inputFormate="password"}
  }

}
