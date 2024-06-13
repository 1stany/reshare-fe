import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Item{
  id : number;
  name : string;
  description : string;
  activetrade : boolean;
  condition : string;
  conditionComment : string;
  categoryName : string;
  creationDate : string;
}

@Injectable({
  providedIn: 'root'
})
export class LastItemsService {
  private apiUrl = 'http://localhost:8080/market';
  constructor(private http: HttpClient) { }
  
  getLastItems(lastN : number) : Observable<Item[]>{
    return this.http.get<[Item]>(`${this.apiUrl}` + lastN);
  }

}