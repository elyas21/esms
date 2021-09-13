import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class RouteEffects {
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.AuthLoginSuccess),
        tap(action => this.Route.navigate([this.returnUrl]))
      ),
    { dispatch: false }
  );
  goHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fromAuthActions.Logout),
        tap(() => this.Route.navigate(['/home']))
      );
    },
    { dispatch: false }
  );

  returnUrl: string;
  constructor(private actions$: Actions, private Route: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(param => {
      this.returnUrl = param[`returnUrl`] ? param[`returnUrl`] : '/';
    });
  }
}
