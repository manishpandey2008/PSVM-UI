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
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { ToolsComponent } from './components/tools/tools.component';
import { CenterComponent } from './components/center/center.component';

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
    ProfileComponent,
    CardComponent,
    TableComponent,
    FormComponent,
    ToolsComponent,
    CenterComponent,
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

  ]
})
export class DesktopModule { }
