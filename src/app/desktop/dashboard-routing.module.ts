import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";

const routes: Routes=[
  {path:"",component:DashboardHomeComponent,
  children: [
    {path:"home",component:HomeComponent},
  ]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule{}
