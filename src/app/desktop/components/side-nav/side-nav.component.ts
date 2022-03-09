import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  selectedTab=[true,false,false,false,false]
  activeIndex=0

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(index:any){
    if(index!=this.activeIndex){
      this.selectedTab[this.activeIndex]=false
      this.selectedTab[index]=true
      this.activeIndex=index
    }
  }

}
