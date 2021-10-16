import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import * as fromSchedule from './reducers/event.reducer';
import * as fromEvent from './reducers/sudoevent.reducer';

export const scheduleStateFeatureKey = 'scheduleState';

export interface State {

  [fromSchedule.eventsFeatureKey]: fromSchedule.State;
  [fromEvent.eventsFeatureKey]: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromSchedule.eventsFeatureKey]: fromSchedule.reducer,
  [fromEvent.eventsFeatureKey]: fromEvent.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
