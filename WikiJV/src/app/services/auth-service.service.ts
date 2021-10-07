import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL_API = ' https://localhost::3000';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }

  loginUser(login : string, password : string): Observable<any>{
    return this.http.post(URL_API, {
      login, 
      password}, httpOptions);
  }

  registerUser(name : string, surname : string, nickname : string, email : string, phone : number, password : string) : Observable<any>{
    return this.http.post(URL_API,{
      name,
      surname,
      nickname,
      email,
      phone,
      password
    }, httpOptions);
  }
}
