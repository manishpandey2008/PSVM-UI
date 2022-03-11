import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-mobile-top-nav',
  templateUrl: './mobile-top-nav.component.html',
  styleUrls: ['./mobile-top-nav.component.css']
})
export class MobileTopNavComponent implements OnInit {

@ViewChild(NotificationComponent) notification!:NotificationComponent;
@ViewChild(UserDropdownComponent) userDropdown!:UserDropdownComponent;

@Output() toggle:any=new EventEmitter;

notificationToggle=false
user=false

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle(){
    this.toggle.emit()
  }

  viewNotification(){
    this.notificationToggle=!this.notificationToggle
    this.notification.show(this.notificationToggle)
  }

  viewUser(){
    this.user=!this.user
    this.userDropdown.show(this.user)
  }
}
