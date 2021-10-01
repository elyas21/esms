import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSection from '../reducers/section.reducer';

export const selectSectionState = createFeatureSelector<fromSection.State>(
  fromSection.sectionFeatureKey
);
export const selectIsLoggedIn = createSelector(
  selectSectionState,
  (state: fromSection.State): any => state.sections
);

export const selectSectionViewModel = createSelector(selectIsLoggedIn, (state): any => {
  return state;
});
