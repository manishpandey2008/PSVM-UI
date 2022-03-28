import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalStoreService } from 'src/app/service/local-store.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent implements OnInit {

  isLogin=true
  showMenu=false

  constructor(private router:Router,private local:LocalStoreService) { }

  ngOnInit(): void {
  }

  show(status:any){
    this.showMenu=status
  }

  logout(){
    this.local.removeLocalStorageValue("token")
    this.router.navigate(["/login"])
  }

}
