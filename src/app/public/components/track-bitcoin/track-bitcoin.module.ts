import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackBitcoinRoutingModule } from './track-bitcoin-routing.module';
import { TrackBitcoinComponent } from './track-bitcoin.component';
import {
  IgxFinancialChartModule,
  IgxLegendModule
} from "igniteui-angular-charts";


@NgModule({
  declarations: [
    TrackBitcoinComponent
  ],
  imports: [
    CommonModule,
    TrackBitcoinRoutingModule,
    IgxFinancialChartModule,
    IgxLegendModule
  ]
})
export class TrackBitcoinModule { }
