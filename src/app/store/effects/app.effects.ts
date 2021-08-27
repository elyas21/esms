import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.Logout),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );

  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.AuthLoginSuccess),
        tap((action) =>
          localStorage.setItem('currentUser', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
