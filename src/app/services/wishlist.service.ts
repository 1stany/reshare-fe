import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemType } from '../model/itemtype.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'http://localhost:8080/wishlist'

  constructor(private http : HttpClient) { }

  getMyWishlist(): Observable<ItemType[]> {
    return this.http.get<ItemType[]>(`${this.apiUrl}/user/my-wishlist`);
  }

  addItemTypeForLoggedUser(userId: number, itemType: ItemType): Observable<any>{
    return this.http.post(`${this.apiUrl}/user/itemType`, itemType);
  }

  removeItemTypeById(userId: number, itemTypeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/itemType/${itemTypeId}`);
  }

}
