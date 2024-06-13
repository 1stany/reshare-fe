import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastItemsService {
  private apiUrl = 'http://localhost:8080/market';
  constructor(private http: HttpClient) { }
  
  // getLastItems() : Observable<Item[]>{
  //   return null;}

}