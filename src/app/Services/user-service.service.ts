import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from "./http-service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  Token_KEY = 'Token';
  anotherTodolist = [];
  constructor(private httpService: HttpServiceService) {}

  setToken(token: string) {
    if (!token) {
      return;
    }
    this.removeToken();
    localStorage.setItem(this.Token_KEY, token)
  }

  getToken() {
    localStorage.getItem(this.Token_KEY);
  }

  removeToken() {
    localStorage.removeItem(this.Token_KEY);
  }

  baseUrl = environment.baseUrl;
  register(user) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}Account/Register`, user);
  }

  login(user) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}Account/Login`, user);
  }

  forgetPassword(user) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}Account/ForgetPassword`, user);
  }

  resetPassword(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pdGlubWFraW4xMjRAZ21haWwuY29tIiwiaWQiOiI1Zjk3NTBiZTEyNzk4OGZkZjdjZjI2MTciLCJleHAiOjE2MDQ5MTI5NjV9.v9mqyYHRTObagbs6As9Av36T80Bqe70r80Z6siLb7pY' }) }
    return this.httpService.post(`${this.baseUrl}Account/ResetPassword/`, data, true,options)
  }

  

  loggedIn() {
    return !!localStorage.getItem('Token')
  }

}
