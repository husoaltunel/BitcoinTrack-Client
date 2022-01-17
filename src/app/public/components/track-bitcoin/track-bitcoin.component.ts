import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { BitconDetail } from 'src/app/shared/models/bitcoin-detail.model';
import { BitcoinDetailService } from 'src/app/shared/services/bitcoin-detail.service';

@Component({
  selector: 'app-track-bitcoin',
  templateUrl: './track-bitcoin.component.html',
  styleUrls: ['./track-bitcoin.component.css']
})
export class TrackBitcoinComponent implements OnInit, OnDestroy {

  data: any;
  minValue: string;
  maxValue: string;
  timerSubscription: Subscription;
  taskDelay : number;
  constructor(private bitcoinDetailService: BitcoinDetailService) {
    this.getBitcoinDetails();
    this.taskDelay = 30000;
  }
  ngOnInit(): void {
    this.timerSubscription = timer(0, this.taskDelay).pipe(
      map(() => {
        this.getBitcoinDetails();
      })
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  getBitcoinDetails() {
    this.bitcoinDetailService.getAll().subscribe((response: BitconDetail[]) => {
      this.setData(response);
    })
  }

  setData(response: BitconDetail[]) {
    this.setAxes(response);
    this.initializeFirstChartData();

    response.forEach(bitcoinDetail => {
      this.data.push({ time: new Date(bitcoinDetail.date), open: `${bitcoinDetail.price.toString().slice(0, 5)}.${bitcoinDetail.price.toString().slice(5)}` })
    })
    this.data.title = "Bitcoin"
  }

  setAxes(response: BitconDetail[]) {
    let prices = response.map(bitcoinDetail => bitcoinDetail.price)
    this.minValue = Math.min(...prices).toString().slice(0, 5);
    this.maxValue = (Math.max(...prices) + 50000).toString().slice(0, 5);
  }

  initializeFirstChartData() {
    this.data = [{ time: new Date(2022, 0, 17, 1), open: 40000.07, }]
  }

}
