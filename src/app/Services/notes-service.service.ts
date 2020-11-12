import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from "./http-service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from "./user-service.service";

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private httpService:HttpServiceService, private userservice:UserServiceService) { }

  baseUrl = environment.baseUrl;


  addNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('Token') }) }
    return this.httpService.post(`${this.baseUrl}Notes`, data, true,options)
  }

  getNotes(){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('Token') }) }
    return this.httpService.get(`${this.baseUrl}Notes`,true,options)
  }
  
  updateNotes(data){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('Token') }) }
    return this.httpService.put(`${this.baseUrl}Notes/5fac4475834f711d0be94e91`,data,true,options)
  }
}


