import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './reducers/auth.reducer';
import { Logout } from './actions/auth.actions';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logout] : [logout];

function logout(reducer) {
  return function(state, action) {
    return reducer(action.type === Logout.type ? undefined : state, action);
  };
}
