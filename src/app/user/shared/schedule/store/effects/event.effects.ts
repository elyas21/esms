import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as eventsAction from '../actions/event.actions';
import { ScheduleService } from 'src/app/service/user/schedule.service';

@Injectable()
export class ScheduleEffects {


  addEvent$ = createEffect(() =>
  this.actions$.pipe(
    ofType(eventsAction.UpsertEvent),
    concatMap(action =>
      this.eventSer.create(action.event).pipe(
        map(data => eventsAction.UpsertEventccusses({ event: data.schedule })),
        catchError(error => of(eventsAction.UpsertEventaliure({ error })))
      )
    )
  )
);

  loadEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eventsAction.loadWeeklyEvents),
      concatMap(action =>
        this.eventSer.getEventsBySectionWeek(action).pipe(
          map(data => eventsAction.loadWeeklyEventsSuccess({ events: data.schedule })),
          catchError(error => of(eventsAction.loadWeeklyEventsFailure({ error })))
        )
      )
    );
  });

  uploadEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eventsAction.PopulateEvents),
      concatMap(action =>
        this.eventSer.bulkAddEvent(action).pipe(
          map(data => {
            console.log(data);

            return eventsAction.PopulateEventsSccusses({ events: data });
          }),
          catchError(error => of(eventsAction.PopulateEventsFaliure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private eventSer: ScheduleService) {}
}
