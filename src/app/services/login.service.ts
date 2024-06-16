import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login'
  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any>{
    return from(this.http.post(this.apiUrl, {email, password}));
  }

}



  


