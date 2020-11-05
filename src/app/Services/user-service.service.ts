import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from "./http-service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {



  constructor(private httpService: HttpServiceService) {

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
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Token': 'Bearer ' }) }
    return this.httpService.post(`${this.baseUrl}Account/ResetPassword`, data, true,)
  }

}
