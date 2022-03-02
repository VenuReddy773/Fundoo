import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem("token")
   }

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

  forgotPassword(data:any) {
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgot called")
    return this.httpService.postService('/user/reset',data,false,headersObject)
  }
  resetPassword(data:any,token:any) {
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
    }
    console.log("forgot called")
    return this.httpService.postService('/user/reset-password',data,true,headersObject)
  }

}
