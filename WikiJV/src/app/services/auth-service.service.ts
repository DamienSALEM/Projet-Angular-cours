import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL_API = 'http://localhost:3000/';

const httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Content-type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }

  loginUser(login : string, password : string): Observable<any>{
    return this.http.post(URL_API+'login', {
      login, 
      password}, httpOptions);
  }

  registerUser(Name : string, Surname : string, User_name : string, Mail : string, phone : number, Password : string, Upvote : number, Role : string) : Observable<any>{
    return this.http.post(URL_API+'register',{
      Name,
      Surname,
      User_name,
      Mail,
      phone,
      Password,
      Upvote,
      Role
    }, httpOptions);
  }
}
