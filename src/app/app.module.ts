import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FarmerLoginComponent } from './mobile/farmer-login/farmer-login.component';
import { DesktopModule } from './desktop/desktop.module'
import { MobileModule } from './mobile/mobile.module';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DesktopModule,
    MobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
