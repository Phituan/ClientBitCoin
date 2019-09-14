import { Component, OnInit } from '@angular/core';
import {Coin} from '../coin';
import {CoinService} from '../coin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {
  coins: Coin[];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.listLive().subscribe({
      next: value => {
        this.coins = value;
      }
    });
  }

}
