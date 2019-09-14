import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCoinComponent } from './create-coin/create-coin.component';
import { CreateMarketComponent } from './create-market/create-market.component';
import { ListCoinComponent } from './list-coin/list-coin.component';
import { ListMarketComponent } from './list-market/list-market.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoinComponent,
    CreateMarketComponent,
    ListCoinComponent,
    ListMarketComponent
  ],
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
