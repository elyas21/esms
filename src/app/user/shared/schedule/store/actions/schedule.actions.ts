import { createAction, props } from '@ngrx/store';

export const loadSchedules = createAction(
  '[Schedule] Load Schedules'
);

export const loadSchedulesSuccess = createAction(
  '[Schedule] Load Schedules Success',
  props<{ data: any }>()
);

export const loadSchedulesFailure = createAction(
  '[Schedule] Load Schedules Failure',
  props<{ error: any }>()
);
