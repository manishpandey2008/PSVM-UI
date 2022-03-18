import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivateChild{

  constructor(private auth:AuthService,private router:Router,private activatedRoute:ActivatedRoute) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.auth.isAuthenticated() && !this.auth.isExpire() || (!this.auth.hasClaim("ADMIN") && !this.auth.hasClaim("MANAGER"))){

      if( (!this.auth.hasClaim("ADMIN") || !this.auth.hasClaim("MANAGER"))){
        alert("You can not accsess this link")
      }

      if(this.auth.hasClaim("OWNER")){
        this.router.navigate(['mobile','dashboard','home']);
        return true;
      }

      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
