import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import * as fromStaffActions from 'src/app/user/director/store/actions/staff.actions';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.AuthLogin, fromStaffActions.addStaff),
        tap(() => {
          return this.spinner.show();
        })
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.AuthLoginSuccess,
          fromAuthActions.AuthLoginFailure,
          fromStaffActions.addStaffFailure,
          fromStaffActions.addStaffSuccess
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}
}
