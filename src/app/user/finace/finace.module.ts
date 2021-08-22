import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinaceRoutingModule } from './finace-routing.module';
import { FinaceComponent } from './finace.component';
import { AddPaymentComponent } from './com/add-payment/add-payment.component';
import { ViewPaymentComponent } from './com/view-payment/view-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [FinaceComponent, AddPaymentComponent, ViewPaymentComponent],
  imports: [CommonModule, FinaceRoutingModule, SharedModule, FormsModule, MatSnackBarModule]
})
export class FinaceModule {}
