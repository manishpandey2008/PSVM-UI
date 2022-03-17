import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStoreService } from './local-store.service';
import { TimeDifferenceService } from './time-difference.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private timeDifference:TimeDifferenceService,private localStore:LocalStoreService,private http:HttpClient) { }

  public isAuthenticated(): boolean {
    const token = this.localStore.getLocalStorageValue('token');
    if(token){
     return true;
    }
    return false;
 }

 public isExpire():boolean{
   const token =this.localStore.getLocalStorageValue('token');
   if(token){
     let decoded:any = jwt_decode(token);
     let time=this.timeDifference.timeDifference(new Date(decoded.exp*1000),new Date())
     // console.log("time==",time)
     if(time.day<0){
       const refreshToken =this.localStore.getLocalStorageValue('refreshToken');
       this.http.get(environment.apiEndpoint+"/user-service/refresh/"+refreshToken).subscribe((resp:any)=>{
         this.localStore.setLocalStorage("token",resp.token);
         this.localStore.setLocalStorage("token",resp.refreshToken);
       })
       return true;
     }
     return true;
   }
   return false;
 }

 hasClaim(claim:string):boolean {
   const token = localStorage.getItem('token');
   if(token){
    var decoded:any = jwt_decode(token);
    return decoded.roles.includes(claim);
   }
   return false;
 }


 getClaims():string[] {
   const token = localStorage.getItem('token');
   if(token){
    var decoded:any = jwt_decode(token);
    return decoded.roles;
   }
   return [];
 }

 getUserUuid():string{
   const token = localStorage.getItem('token');
   if(token){
    var decoded:any = jwt_decode(token);
    return decoded.sub;
   }
   return "none";
 }

 // public hasRole(role: string): boolean {

 //   const jwtHelper = new JwtHelperService();
 //   const token = localStorage.getItem('token');
 //   const user = jwtHelper.decodeToken(token);
 //   return user.roles.includes(role);
 // }

 // public getRoles() {
 //   const jwtHelper = new JwtHelperService();
 //   const token = localStorage.getItem('token');
 //   const user = jwtHelper.decodeToken(token);
 //   return user.roles;
 // }
}

function jwt_decode(token: any): any {
  throw new Error('Function not implemented.');
}

