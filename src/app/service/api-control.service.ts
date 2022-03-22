import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class ApiControlService {

  constructor(private http: HttpClient,private localStore:LocalStoreService) {
  }


getHeader():HttpHeaders{
  let headers_object = new HttpHeaders( {'Content-Type':'application/json',"Authorization": "Bearer " + this.localStore.getLocalStorageValue('token')});
  return headers_object;
}

getHeaderWithoutToken():HttpHeaders{
  var headers_object = new HttpHeaders({'Content-Type': 'application/json'});
  return headers_object;
}

  postWithoutToken(path: string, entity: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity,{ headers:this.getHeaderWithoutToken()});
  }

  getWithoutToken(path: string): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`,{ headers:this.getHeaderWithoutToken()});
  }


  post(path: string, entity: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity,{ headers:this.getHeader()});
  }

  postEvents(path: string, entity: any): Observable<any> {
    return this.http.post(`${environment.apiEndpoint}/${path}`, entity,{ headers:this.getHeader()});
  }

  list(path: string): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoint}/${path}`,{ headers:this.getHeader()});
  }

  delete(path: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiEndpoint}/${path}`,{ headers:this.getHeader()});
  }

  get(path: string): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoint}/${path}`,{headers:this.getHeader()});
  }

  createUpload(path: string, entity: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity);
  }

  get httpClient(){
    return this.http;
  }
}
