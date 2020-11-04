import { Injectable } from '@angular/core';
import { HttpServiceService } from "./http-service.service";

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private httpService: HttpServiceService) {

  }

  register(user) {
    console.log("user service called");
    return this.httpService.register('Account/Register', user);
  }

  login(user) {
    console.log("user service called");
    return this.httpService.login('Account/Login', user);
  }
}
