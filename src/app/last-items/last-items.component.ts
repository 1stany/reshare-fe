import { Component, OnInit } from '@angular/core';
import { LastItemsService, Item } from '../services/last-items.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-last-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './last-items.component.html',
  styleUrl: './last-items.component.css'
})


//   export enum Params {
//   param1 = '',
//   param2 = true,
//   param3 = ''
// }


export class LastItemsComponent implements OnInit{
  items : Item[] = [];
  pars : [boolean, number] = [true, 10];
  constructor(private lastItemsService : LastItemsService){}
  ngOnInit(): void {
    this.lastItemsService.getLastItems(this.pars).subscribe((i: Item[]) => (this.items = i));
  }
}
