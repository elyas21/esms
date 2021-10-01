import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as fromEventsActions from '../actions/event.actions';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';

@Injectable()
export class EventEffects {
    /****************************************************************** */
  /*****Load Events API EFFECT ** */
  /****************************************************************** */
  loadSudoSchedules$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromEventsActions.loadEvents),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.sudoSchedueleSer.getAllBySchoolSection(action.section).pipe(
          map(data => fromEventsActions.loadEventsSucsess({ events: data })),
          catchError(error => of(fromEventsActions.loadEventsFaliure({ error })))
        )
      )
    );
  });
  /****************************************************************** */
  /*****Load Event API EFFECT ** */
  /****************************************************************** */
  loadSudoSchedule$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromEventsActions.loadEvent),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.sudoSchedueleSer.getOneById(action.id).pipe(
          map(data => fromEventsActions.loadEventSucsess({ event: data })),
          catchError(error => of(fromEventsActions.loadEventFaliure({ error })))
        )
      )
    );
  });

  /****************************************************************** */
  /*****UPDATE Event API EFFECT ** */
  /****************************************************************** */
  upsertEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEventsActions.upsertEvent),
      concatMap(action =>
        this.sudoSchedueleSer.update(action.event).pipe(
          map(data => fromEventsActions.upsertEventSuccess({ event: data })),
          catchError(error => of(fromEventsActions.upsertEventFailure({ error })))
        )
      )
    )
  );
  /****************************************************************** */
  /*****UPDATE Event API EFFECT ** */
  /****************************************************************** */
  updateEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEventsActions.updateEvent),
      concatMap(action =>
        this.sudoSchedueleSer.update(action.event).pipe(
          map(data => fromEventsActions.updateEventSuccess({ event: data.event })),
          catchError(error => of(fromEventsActions.updateEventFaliure({ error })))
        )
      )
    )
  );
  /****************************************************************** */
  /*****ADD Event API EFFECT ** */
  /****************************************************************** */
  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEventsActions.addEvent),
      concatMap(action =>
        this.sudoSchedueleSer.create(action.event).pipe(
          map(data => fromEventsActions.addEventSuccess({ event: data.schedule })),
          catchError(error => of(fromEventsActions.addEventFaliure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private sudoSchedueleSer: SudoScheduleService) {}
}
