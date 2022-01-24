import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as fromSudoEventsActions from '../actions/sudoevent.actions';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';

@Injectable()
export class EventEffects {
  /****************************************************************** */
  /*****Load Events API EFFECT ** */
  /****************************************************************** */
  loadSudoSchedules$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSudoEventsActions.loadEvents),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.sudoSchedueleSer.getAllBySchoolSection(action.section).pipe(
          map(data => fromSudoEventsActions.loadEventsSucsess({ events: data })),
          catchError(error => of(fromSudoEventsActions.loadEventsFaliure({ error })))
        )
      )
    );
  });
  /****************************************************************** */
  /*****Load Event API EFFECT ** */
  /****************************************************************** */
  loadSudoSchedule$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSudoEventsActions.loadEvent),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.sudoSchedueleSer.getOneById(action.id).pipe(
          map(data => fromSudoEventsActions.loadEventSucsess({ event: data })),
          catchError(error => of(fromSudoEventsActions.loadEventFaliure({ error })))
        )
      )
    );
  });

  /****************************************************************** */
  /*****UPDATE Event API EFFECT ** */
  /****************************************************************** */
  upsertEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSudoEventsActions.upsertEvent),
      concatMap(action =>
        this.sudoSchedueleSer.update(action.event).pipe(
          map(data => fromSudoEventsActions.upsertEventSuccess({ event: data })),
          catchError(error => of(fromSudoEventsActions.upsertEventFailure({ error })))
        )
      )
    )
  );
  /****************************************************************** */
  /*****UPDATE Event API EFFECT ** */
  /****************************************************************** */
  updateEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSudoEventsActions.updateEvent),
      concatMap(action =>
        this.sudoSchedueleSer.update(action.event).pipe(
          map(data => {
            console.log(data);
            return fromSudoEventsActions.updateEventSuccess({ event: data.event });
          }),
          catchError(error => of(fromSudoEventsActions.updateEventFaliure({ error })))
        )
      )
    )
  );
  /****************************************************************** */
  /*****ADD Event API EFFECT ** */
  /****************************************************************** */
  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSudoEventsActions.addEvent),
      concatMap(action =>
        this.sudoSchedueleSer.create(action.event).pipe(
          map(data => fromSudoEventsActions.addEventSuccess({ event: data.schedule })),
          catchError(error => of(fromSudoEventsActions.addEventFaliure({ error })))
        )
      )
    )
  );

  /****************************************************************** */
  /*****Delete Event API EFFECT ** */
  /****************************************************************** */
  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSudoEventsActions.deleteEvent),
      concatMap(action =>
        this.sudoSchedueleSer.delete(action.id).pipe(
          map(data => {
            console.log(data);
            
            return fromSudoEventsActions.deleteEventSuccess({ id: data.id });
          }),
          catchError(error => of(fromSudoEventsActions.deleteEventFaliure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private sudoSchedueleSer: SudoScheduleService) {}
}
