import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  setLocalStorage(key:string,val:any){
    localStorage.setItem(key,val);
  }

  getLocalStorageValue(key:string){
    return localStorage.getItem(key)
  }

  getLocalStorageObject(key:string){
    const data = localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
  }

  removeLocalStorageValue(key:string){
    localStorage.removeItem(key)
  }
}
