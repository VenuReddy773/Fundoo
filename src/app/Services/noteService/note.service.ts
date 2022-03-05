import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any

  constructor(private http: HttpService) {
  this.token = localStorage.getItem("token")
  }
  add(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("addNote called")
    return this.http.postService('/notes/addNotes', data, true, headersObject)
  }
  GetNotes() {
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("GetNotes called")
    return this.http.getService('/notes/getNotesList',headersObject)
  }
}

