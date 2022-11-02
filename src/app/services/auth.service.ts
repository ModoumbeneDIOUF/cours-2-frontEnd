import { Url } from './api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = new Url()

  baseUrl =  this.url.url

  constructor(private http:HttpClient) { }


  loginUser(email:any, password:any){

   return this.http.post<any>(this.baseUrl + "login", {email, password})
  }
}
