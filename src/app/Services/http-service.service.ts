import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {
  }

  Url = environment.baseUrl; 

  register(url, user){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    console.log(" https called"); return this.httpClient.post(this.Url + url, user, options)
  };
  
  login(url, user){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    console.log(" https called"); return this.httpClient.post(this.Url + url, user, options)
  };

   
  
}
