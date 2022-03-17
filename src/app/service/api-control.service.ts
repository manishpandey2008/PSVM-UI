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
  var headers_object = new HttpHeaders();
      headers_object.set('Content-Type', 'application/json');
      headers_object.set("Authorization", "Bearer " + this.localStore.getLocalStorageValue('token'));
  return headers_object;
}

  post(path: string, entity: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity,{ headers:this.getHeader()});
  }

  postEvents(path: string, entity: any): Observable<any> {
    return this.http.post(`${environment.apiEndpoint}/${path}`, entity,{ headers:this.getHeader()});
  }

  list(path: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiEndpoint}/${path}`,{ headers:this.getHeader()});
  }

  get(path: string,id:string): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoint}/${path}/${id}`,{ headers:this.getHeader()});
  }

  createUpload(path: string, entity: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(`${environment.apiEndpoint}/${path}`, entity);
  }

  get httpClient(){
    return this.http;
  }
}
