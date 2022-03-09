import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MobileSideNavComponent } from '../mobile-side-nav/mobile-side-nav.component';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.css']
})
export class MobileDashboardComponent implements OnInit {

  @ViewChild(MobileSideNavComponent) sideNav!:MobileSideNavComponent;


  isToggle=false;

  constructor(private bpo: BreakpointObserver,private router:Router) { }

  ngOnInit(): void {
    this.checkScreenSize()
  }

  checkScreenSize(){
    this.bpo.observe(['(min-width: 585px)'])
    .subscribe(result => {
        if (result.matches) {
          this.router.navigate(['/mobile/not-allowed'])
        }
    });
  }

  sidebarToggel(){
    this.isToggle=!this.isToggle
    this.sideNav.isShow(this.isToggle);
  }
}
