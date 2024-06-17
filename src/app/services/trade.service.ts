import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private item: Item | undefined;
  
  constructor() { }

  setItem(item: Item) { 
    this.item = item;
  } 
  
  getItem() { 
    return this.item; 
  }
}
