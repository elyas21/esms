import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinaceGuard } from 'src/app/helpers/finace.guard';
import { FinaceComponent } from './finace.component';
import { AuthGuard } from 'src/app/helpers';
import { AddPaymentComponent } from './com/add-payment/add-payment.component';
import { ViewPaymentComponent } from './com/view-payment/view-payment.component';

const routes: Routes = [
  {
    path: '',
    component: FinaceComponent,
    canActivate: [AuthGuard, FinaceGuard]
  },
  {
    path: 'add-payment',
    component: AddPaymentComponent
  },
  {
    path: 'view-payment',
    component: ViewPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinaceRoutingModule {}
