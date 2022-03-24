import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/service/local-store.service';
import { AuthService } from '../../../service/auth.service'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  selectedTab=[true,false,false,false,false,false,false,false,false]
  activeIndex=0
  auth=false;

  constructor(private authService:AuthService,private local:LocalStoreService) { }

  ngOnInit(): void {
    if(this.authService.hasClaim("ADMIN")){
      this.auth=true
    }
  }

  changeTab(index:any){
    if(index!=this.activeIndex){
      this.selectedTab[this.activeIndex]=false
      this.selectedTab[index]=true
      this.activeIndex=index
    }
  }

}
