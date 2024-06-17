import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../model/item.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trade-offer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './trade-offer.component.html',
  styleUrl: './trade-offer.component.css'
})
export class TradeOfferComponent implements OnInit{
  item : Item | undefined;
  items: Item[] = [];
  
  constructor(private itemService : ItemService, private route : ActivatedRoute, private userService: UserService) { }

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('itemId');
    console.log(id);
    if(id){
      this.itemService.getItem(+id).subscribe((item) => (this.item = item));
    }
    this.userService.getItems().subscribe((i : Item[]) => (this.items=i));
  }
}
