import { createAction, props } from '@ngrx/store';
import { Event } from 'src/app/model/event';

export const loadSchedules = createAction(
  '[Event] Load Schedules'
);

export const loadSchedulesSuccess = createAction(
  '[Event] Load Schedules Success',
  props<{ data: any }>()
);

export const loadSchedulesFailure = createAction(
  '[Event] Load Schedules Failure',
  props<{ error: any }>()
);
export const PopulateEvents = createAction(
  '[Events] PopulateEvents',
  props<{range:any,events : Event[] }>()
);
export const PopulateEventsSccusses = createAction(
  '[Events] PopulateEvents Sccusses',
  props<{events : Event[] }>()
);export const PopulateEventsFaliure = createAction(
  '[Events] PopulateEvents Faliure',
  props<{error : any }>()
);
