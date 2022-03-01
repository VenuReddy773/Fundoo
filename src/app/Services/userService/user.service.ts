import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  Signup(data:any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("Signup called",data)
    return this.httpService.postService('/user/userSignUp',data,false,headersObject)
  }

  login(data:any) {
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("login called")
    return this.httpService.postService('/user/login',data,false,headersObject)
  }

  forgotPassword() {}

  resetPassword() {}

}
