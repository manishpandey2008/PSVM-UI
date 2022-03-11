import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

  isLogin=true
  showMenu=false

  constructor() { }

  ngOnInit(): void {
  }

  show(status:any){
    this.showMenu=status
  }

}
