import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromStaff from './reducers/staff.reducer';

export const staffStateFeatureKey = 'staffState';

export interface State {
  [fromStaff.stafvesFeatureKey]: fromStaff.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromStaff.stafvesFeatureKey]: fromStaff.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
