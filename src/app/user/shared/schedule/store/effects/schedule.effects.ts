import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ScheduleActions from '../actions/schedule.actions';



@Injectable()
export class ScheduleEffects {

  loadSchedules$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ScheduleActions.loadSchedules),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ScheduleActions.loadSchedulesSuccess({ data })),
          catchError(error => of(ScheduleActions.loadSchedulesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
