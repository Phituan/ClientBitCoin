import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Market} from "../market";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MarketService} from "../market.service";

@Component({
  selector: 'app-create-market',
  templateUrl: './create-market.component.html',
  styleUrls: ['./create-market.component.css']
})
export class CreateMarketComponent implements OnInit {
  market: Market;
  form: FormGroup;
  formControls = {
    name: [null],
    description: [null]
  };


  constructor(
    private formBuilder: FormBuilder,
    private marketService: MarketService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(this.formControls);
  }

  doSubmit() {
    this.market = new Market(this.form.get('name').value, this.form.get('description').value);
    console.log('Hello1');
    let observable: Observable<Market>;
    observable = this.marketService.saveLive(this.market);
    observable
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }
}
