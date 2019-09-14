import {Component, OnInit} from '@angular/core';
import {Coin} from '../coin';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CoinService} from '../coin.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-coin',
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.css']
})
export class CreateCoinComponent implements OnInit {
  coin: Coin;
  form: FormGroup;
  formControls = {
    name: [null],
    baseAsset: [null],
    quoteAsset: [null],
    lastPrice: [null],
    volumn24h: [null],
    marketId: [null]
  };

  constructor(
    private formBuilder: FormBuilder,
    private coinService: CoinService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  doSubmit() {
    // tslint:disable-next-line:max-line-length
    this.coin = new Coin(this.form.get('name').value, this.form.get('baseAsset').value, this.form.get('quoteAsset').value, this.form.get('lastPrice').value, this.form.get('volumn24h').value, this.form.get('marketId').value);
    console.log('hahha');
    // tslint:disable-next-line:prefer-const
    let observable: Observable<Coin>;
    observable = this.coinService.saveLive(this.coin);
    observable
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }
}
