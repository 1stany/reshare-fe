import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/market/user/item';
  constructor(private http : HttpClient) { }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl, );
  }
}
