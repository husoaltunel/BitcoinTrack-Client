import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackBitcoinComponent } from './track-bitcoin.component';

const routes: Routes = [
  {path:"",component:TrackBitcoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackBitcoinRoutingModule { }
