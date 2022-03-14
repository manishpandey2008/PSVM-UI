import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",loadChildren: () => import('./desktop/desktop.module').then(m => m.DesktopModule)},
  {path:"mobile",loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
