import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl;

  constructor(private http:HttpClient) { }
  postService(url:string,reqdata:any,token:boolean=false,httpOptions:any={})
  {
    let options={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(this.BaseUrl + url, reqdata,options);
  }

  getService(){}

  putService(){}

  deleteService(){}
}
