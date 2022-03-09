import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    HomeComponent,
    SideNavComponent,
    TopNavComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DesktopModule { }
