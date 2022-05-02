import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import { GcallBackComponent } from './component/gcall-back/gcall-back.component';
@NgModule({
  declarations: [LoginComponent, GcallBackComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AlertModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [LoginComponent]
})
export class CoreModule {}
