import { Component, OnInit } from '@angular/core';
import {Market} from '../market';
import {MarketService} from '../market.service';

@Component({
  selector: 'app-list-market',
  templateUrl: './list-market.component.html',
  styleUrls: ['./list-market.component.css']
})
export class ListMarketComponent implements OnInit {
  markets: Market[];

  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.listLive().subscribe({
      next: value => {
        this.markets = value;
      }
    });
  }
}
