import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mobile-side-nav',
  templateUrl: './mobile-side-nav.component.html',
  styleUrls: ['./mobile-side-nav.component.css']
})
export class MobileSideNavComponent implements OnInit {

  @Output() selectResponce:any=new EventEmitter;

  selectedTab=[true,false,false,false,false]
  activeIndex=0
  isView=false;

  constructor() { }

  ngOnInit(): void {
  }

isShow(data:any){
  this.isView=data
}

  changeTab(index?:any){
    if(index!=this.activeIndex && index){
      this.selectedTab[this.activeIndex]=false
      this.selectedTab[index]=true
      this.activeIndex=index
    }
    this.selectResponce.emit();
  }

}
