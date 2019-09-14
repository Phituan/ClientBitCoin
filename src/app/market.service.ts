import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Market} from './market';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  markets: Market[] = [
    new Market('Binate', 'asdff'),
    new Market('Huobi', '2500'),
    new Market('Bitfinex', '3000'),
    new Market('Bittrex', '2600'),
    new Market('Bitmex', '1500'),
    new Market('CMC', '1500')
  ];

  constructor(private http: HttpClient) { }

  list(): Market[] {
    return this.markets;
  }

  create(hero: Market) {
    this.markets.push(hero);
  }

  listLive(): Observable<Market[]> {
    return this.http.get<{ data: Market[] }>(
      `http://localhost:8080/api/markets`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data)
    );
  }

  saveLive(market: Market): Observable<Market> {
    console.log('Hello');
    return this.http.post<{ data: Market }>(
      `http://localhost:8080/api/markets`,
      market,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data));
  }
}
