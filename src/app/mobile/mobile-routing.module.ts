import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoryComponent } from "./components/history/history.component";
import { LocationComponent } from "./components/location/location.component";
import { MobileDashboardComponent } from "./components/mobile-dashboard/mobile-dashboard.component";
import { MobileHomeComponent } from "./components/mobile-home/mobile-home.component";
import { NotAllowedComponent } from "./components/not-allowed/not-allowed.component";
import { PriceLimitComponent } from "./components/price-limit/price-limit.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { FarmerLoginComponent } from "./farmer-login/farmer-login.component";

const routes:Routes=[
  {component:FarmerLoginComponent,path:""},
  {path:"not-allowed",component:NotAllowedComponent},
  {path:"dashboard",component:MobileDashboardComponent,
    children:[
      {path:"home",component:MobileHomeComponent},
      {path:"price-limit",component:PriceLimitComponent},
      {path:"profile",component:ProfileComponent},
      {path:"history",component:HistoryComponent},
      {path:"location",component:LocationComponent}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MobileRoutingModule{}
