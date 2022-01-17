import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/track-bitcoin/track-bitcoin.module').then(m => m.TrackBitcoinModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }