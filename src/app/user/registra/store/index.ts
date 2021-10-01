import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromGrade from './reducers/grade.reducer';
import * as fromSection from './reducers/section.reducer';

export const regiStoreFeatureKey = 'regiStore';

export interface State {

  [fromGrade.gradesFeatureKey]: fromGrade.State;
  [fromSection.sectionFeatureKey]: fromSection.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromGrade.gradesFeatureKey]: fromGrade.reducer,
  [fromSection.sectionFeatureKey]: fromSection.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
