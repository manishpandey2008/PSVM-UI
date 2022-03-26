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
showBackround=false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle(){
    this.toggle.emit()
  }

  viewNotification(){
    this.notificationToggle=!this.notificationToggle
    this.showBackround=!this.showBackround
    this.notification.show(this.notificationToggle)
  }

  viewUser(){
    this.user=!this.user
    this.showBackround=!this.showBackround
    this.userDropdown.show(this.user)
  }
  hideNotification(){
    this.notificationToggle=false;
    this.user=false;
    this.showBackround=false;
    this.userDropdown.show(false)
    this.notification.show(false)
  }
}
