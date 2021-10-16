import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ScheduleActions from '../actions/event.actions';
import { ScheduleService } from 'src/app/service/user/schedule.service';

@Injectable()
export class ScheduleEffects {
  // loadSchedules$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(ScheduleActions.loadSchedules),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => ScheduleActions.loadSchedulesSuccess({ data })),
  //         catchError(error => of(ScheduleActions.loadSchedulesFailure({ error }))))
  //     )
  //   );
  // });

  uploadEvents = createEffect(() => {
    return this.actions$.pipe(
      ofType(ScheduleActions.PopulateEvents),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.eventSer.bulkAddEvent(action).pipe(
          map(data => {
            console.log(data);
            
            return ScheduleActions.PopulateEventsSccusses({ events: data });
          }),
          catchError(error => of(ScheduleActions.loadSchedulesFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private eventSer: ScheduleService) {}
}
