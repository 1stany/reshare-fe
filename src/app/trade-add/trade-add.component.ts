import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TradeService } from '../services/trade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferItemTradeService } from '../services/offer-item-trade.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-trade-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trade-add.component.html',
  styleUrl: './trade-add.component.css'
})
export class TradeAddComponent implements OnInit{
  item: Item | undefined;
  requestedItem : Item | undefined;

  constructor(private tradeService: TradeService, private router: Router, private route : ActivatedRoute, private offerItemTradeService : OfferItemTradeService){
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      this.item = navigation.extras.state['item'];
    }
  }

  ngOnInit(): void {
    this.offerItemTradeService.ownerItem$.subscribe({
      next: (i) => {
        this.item = i;
        console.log(this.item)
      }
    });
    this.offerItemTradeService.requestedItem$.subscribe({
      next: (i) => {
        this.requestedItem = i;
        console.log(this.requestedItem)
      }
    });
  }
}
