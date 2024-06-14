import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  constructor(private itemService : ItemService, private route : ActivatedRoute) { }
  item : Item | undefined;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id){
      this.itemService.getItem(+id).subscribe(i => this.item = i);
    }
  }
}
