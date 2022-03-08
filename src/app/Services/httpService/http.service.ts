import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl;
  token: any

  constructor(private http: HttpClient) { }
  postService(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.http.post(this.BaseUrl + url, reqdata, token && httpOptions);
  }

  getService(url: string, httpOptions: any = {}) {
    return this.http.get(this.BaseUrl + url,httpOptions);
  }
  putService() { }

  deleteService() {
    
   }
}
