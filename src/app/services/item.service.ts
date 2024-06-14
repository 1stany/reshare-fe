import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Item{
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
export class ItemService {
  private apiUrl = 'http://localhost:8080/market/item'
  constructor(private http: HttpClient) { }

  getItem(id: number) : Observable<Item>{
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }
}
