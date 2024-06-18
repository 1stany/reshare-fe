import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/market/user/item';
  private userUrl = 'http://localhost:8080/user';
  constructor(private http : HttpClient) { }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getUserDetails(): Observable<any>{
    // const token = localStorage.getItem('token');
    // if(!token) { 
    //   alert('Scaduto il token, prego fare il login');
    // }
    // const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get<User>(this.userUrl);
  }
}
