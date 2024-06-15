import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/register'; // replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  registerUser(username: string, password: string): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
