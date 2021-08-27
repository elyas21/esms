import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/core/serivice/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.AuthLogin),
      concatMap(action =>
        this.authSer.login(action.userId, action.password).pipe(
          map(user => AuthActions.AuthLoginSuccess({ user })),
          catchError(error => of(AuthActions.AuthLoginFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authSer: AuthService) {}
}
