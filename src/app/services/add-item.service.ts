import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../model/item.model';
import { FullItem } from '../model/full-item';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  private apiUrl = 'http://localhost:8080/add-item';
  constructor(private http: HttpClient) { }

  saveItem(item: FullItem): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}
