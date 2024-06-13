import { Component, OnInit } from '@angular/core';
import { LastItemsService, Item } from '../services/last-items.service';

@Component({
  selector: 'app-last-items',
  standalone: true,
  imports: [],
  templateUrl: './last-items.component.html',
  styleUrl: './last-items.component.css'
})


/* export enum Params {
  param1 = 'ciccio',
  param2 = 'pasticcio',
  param3 = 'minicicciolo'
}
*/

export class LastItemsComponent implements OnInit{
  items : Item[] = [];
  constructor(private lastItemsService : LastItemsService){}
  ngOnInit(): void {
    this.lastItemsService.getLastItems();
  }

}
