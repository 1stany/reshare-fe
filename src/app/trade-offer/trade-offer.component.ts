import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../model/item.model';
import { ItemComponent } from '../item/item.component';
import { SharedItemService } from '../services/shared-item.service';
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
  
  constructor(private itemService : ItemService, private route : ActivatedRoute, private sharedItemService : SharedItemService, private userService: UserService) { }

  
  ngOnInit(): void {
    this.item = this.getSharedItem();
    this.userService.getItems().subscribe((i : Item[]) => (this.items=i));
  }

  getSharedItem(){
    return this.item = this.sharedItemService.getItem();
  }
  //metodo con nome oggetto, id e id e nome proprietario
}
