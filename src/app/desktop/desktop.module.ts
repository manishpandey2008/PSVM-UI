import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LabourComponent } from './components/labour/labour.component';
import { OwnarComponent } from './components/ownar/ownar.component';
import { GovtYojanaComponent } from './components/govt-yojana/govt-yojana.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    HomeComponent,
    SideNavComponent,
    TopNavComponent,
    LabourComponent,
    OwnarComponent,
    GovtYojanaComponent,
    ClaimsComponent,
    WorkListComponent,
    ProfileComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DesktopModule { }
