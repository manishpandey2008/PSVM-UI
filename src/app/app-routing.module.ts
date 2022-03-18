import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './common/default-page/default-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"not-allowed",component:DefaultPageComponent},
  {path:"dashboard",loadChildren: () => import('./desktop/desktop.module').then(m => m.DesktopModule)},
  {path:"mobile",loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
