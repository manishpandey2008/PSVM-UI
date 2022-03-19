import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { config } from './config';


@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: HttpClient) { }

  public fetch<T>(entity:string): Observable<T> {
    return this.http.get<T>(this.getBaseUrl() + config.FORM_URL + entity  + '.json');
  }
  private getBaseUrl() {
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'
  }

  public fetchStateDistrictList<T>(entity:string): Observable<T> {
    return this.http.get<T>(this.getBaseUrl() +"assets/data/" + entity  + '.json');
  }

}


