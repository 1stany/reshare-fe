import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model/item.model';
import { ItemComponent } from '../item/item.component';
import { TradeService } from '../services/trade.service';

@Component({
  selector: 'app-trade-offer',
  standalone: true,
  imports: [],
  templateUrl: './trade-offer.component.html',
  styleUrl: './trade-offer.component.css'
})
export class TradeOfferComponent implements OnInit{
  item : Item | undefined;
  constructor(private itemService : ItemService, private route : ActivatedRoute, private tradeService : TradeService) { }

  
  ngOnInit(): void {
    this.getSharedItem();
  }

  getSharedItem(){
    this.item = this.tradeService.getItem();
  }
  //metodo con nome oggetto, id e id e nome proprietario
}
