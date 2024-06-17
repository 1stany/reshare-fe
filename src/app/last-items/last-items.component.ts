import { Component, OnInit } from '@angular/core';
import { LastItemsService} from '../services/last-items.service';
import { RouterModule } from '@angular/router';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-last-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './last-items.component.html',
  styleUrl: './last-items.component.css'
})

export class LastItemsComponent implements OnInit{
  items : Item[] = [];
  pars : [boolean, number] = [true, 10];
  constructor(private lastItemsService : LastItemsService){}
  ngOnInit(): void {
    this.lastItemsService.getLastItems(this.pars).subscribe((i: Item[]) => (this.items = i));
  }
}
