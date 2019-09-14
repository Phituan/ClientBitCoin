import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Coin} from './coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  coins: Coin[] = [
    new Coin('OMG', 'asdff', 'asdd', '2540', 'ddd', '2'),
    new Coin('Ripple', 'asdff', 'asdd', '2540', 'ddd', '2'),
    new Coin('EOS', 'asdff', 'asdd', '2540', 'ddd', '2'),
    new Coin('TRON', 'asdff', 'asdd', '2540', 'ddd', '2'),
    new Coin('NEO', 'asdff', 'asdd', '2540', 'ddd', '2')
  ];

  constructor(private http: HttpClient) { }

  list(): Coin[] {
    return this.coins;
  }

  create(coin: Coin) {
    this.coins.push(coin);
  }

  listLive(): Observable<Coin[]> {
    return this.http.get<{ data: Coin[] }>(
      `http://localhost:8080/api/coins`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data)
    );
  }

  saveLive(coin: Coin): Observable<Coin> {
    console.log('Hello');
    return this.http.post<{ data: Coin }>(
      `http://localhost:8080/api/coins`,
      coin,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).pipe(map(({data}) => data));
  }
}
