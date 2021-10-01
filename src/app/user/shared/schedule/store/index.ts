import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import * as fromSchedule from './reducers/schedule.reducer';
import * as fromEvent from './reducers/event.reducer';

export const scheduleStateFeatureKey = 'scheduleState';

export interface State {

  [fromSchedule.scheduleFeatureKey]: fromSchedule.State;
  [fromEvent.eventsFeatureKey]: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromSchedule.scheduleFeatureKey]: fromSchedule.reducer,
  [fromEvent.eventsFeatureKey]: fromEvent.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
