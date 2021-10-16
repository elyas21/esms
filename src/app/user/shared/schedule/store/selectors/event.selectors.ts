import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSchedule from '../reducers/event.reducer';

export const selectScheduleState = createFeatureSelector<fromSchedule.State>(
  fromSchedule.eventsFeatureKey
);
