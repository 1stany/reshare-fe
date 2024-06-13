import { Component, OnInit } from '@angular/core';
import { LastItemsService } from '../services/last-items.service';

@Component({
  selector: 'app-last-items',
  standalone: true,
  imports: [],
  templateUrl: './last-items.component.html',
  styleUrl: './last-items.component.css'
})
export class LastItemsComponent implements OnInit{
  constructor(private lastItem : LastItemsService){}
  ngOnInit(): void {
  }

}
