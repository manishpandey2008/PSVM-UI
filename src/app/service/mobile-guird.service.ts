import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MobileGuirdService {

  constructor(private auth:AuthService,private router:Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(!this.auth.isAuthenticated() && !this.auth.isExpire() || (!this.auth.hasClaim("LOBOUR") && !this.auth.hasClaim("OWNER"))){
      if((!this.auth.hasClaim("LOBOUR") || !this.auth.hasClaim("OWNER"))){
          alert("You can not accsess this link")
      }
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
