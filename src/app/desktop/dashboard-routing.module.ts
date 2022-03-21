import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultPageComponent } from "../common/default-page/default-page.component";
import { GuardService } from "../service/guard.service";
import { CenterComponent } from "./components/center/center.component";
import { ClaimsComponent } from "./components/claims/claims.component";
import { GovtYojanaComponent } from "./components/govt-yojana/govt-yojana.component";
import { HomeComponent } from "./components/home/home.component";
import { LabourComponent } from "./components/labour/labour.component";
import { OwnarComponent } from "./components/ownar/ownar.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { WorkCardComponent } from "./components/work-card/work-card.component";
import { WorkListComponent } from "./components/work-list/work-list.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";

const routes: Routes=[
  {path:"",component:DashboardHomeComponent,
  canActivateChild:[GuardService],
  children: [
    {path:"home",component:HomeComponent},
    {path:"labour",component:LabourComponent},
    {path:"owner",component:OwnarComponent},
    {path:"govt-yojana",component:GovtYojanaComponent},
    {path:"claim",component:ClaimsComponent},
    {path:"work-list",component:WorkCardComponent},
    {path:"work-list/:id",component:WorkListComponent},
    {path:"center",component:CenterComponent},
    {path:"profile",component:ProfileComponent}
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule{}
