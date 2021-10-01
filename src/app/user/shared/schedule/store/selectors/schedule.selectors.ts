import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSchedule from '../reducers/schedule.reducer';

export const selectScheduleState = createFeatureSelector<fromSchedule.State>(
  fromSchedule.scheduleFeatureKey
);
