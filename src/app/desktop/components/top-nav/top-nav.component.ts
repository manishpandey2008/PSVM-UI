import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @ViewChild(UserDropdownComponent) userDropdown!:UserDropdownComponent

  user=false
  showBackround=false

  constructor() { }

  ngOnInit(): void {
  }

  viewUser(){
    this.user=!this.user
    console.log("===========")
    this.showBackround=!this.showBackround
    this.userDropdown.show(this.user)
  }
  hideNotification(){
    this.user=false;
    this.showBackround=false;
    this.userDropdown.show(false)
  }

}
