import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { NotAllowedComponent } from './components/not-allowed/not-allowed.component';
import { MobileSideNavComponent } from './components/mobile-side-nav/mobile-side-nav.component';
import { MobileTopNavComponent } from './components/mobile-top-nav/mobile-top-nav.component';
import { MobileDashboardComponent } from './components/mobile-dashboard/mobile-dashboard.component';
import { MobileHomeComponent } from './components/mobile-home/mobile-home.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { PriceLimitComponent } from './components/price-limit/price-limit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { FormComponent } from './components/form/form.component';
import { LocationComponent } from './components/location/location.component';



@NgModule({
  declarations: [
    FarmerLoginComponent,
    NotAllowedComponent,
    MobileSideNavComponent,
    MobileTopNavComponent,
    MobileDashboardComponent,
    MobileHomeComponent,
    CardViewComponent,
    ToggleComponent,
    PriceLimitComponent,
    ProfileComponent,
    HistoryComponent,
    FormComponent,
    LocationComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ]
})
export class MobileModule { }
