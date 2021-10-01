import { Action, createReducer, on } from '@ngrx/store';
import * as ScheduleActions from '../actions/schedule.actions';

export const scheduleFeatureKey = 'schedule';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ScheduleActions.loadSchedules, state => state),
  on(ScheduleActions.loadSchedulesSuccess, (state, action) => state),
  on(ScheduleActions.loadSchedulesFailure, (state, action) => state),

);

