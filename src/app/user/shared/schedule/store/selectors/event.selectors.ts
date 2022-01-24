import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEvent from '../reducers/event.reducer';

export const selectScheduleState = createFeatureSelector<fromEvent.State>(
  fromEvent.eventsFeatureKey
);
export interface EventsViewModel {
  id: string;
  start: string;
  end: string;
  classType: string;
  day: number;
}
export const selectAllEntites = createSelector(selectScheduleState, fromEvent.selectAll);

export const selectEventViewModel = createSelector(
  selectAllEntites,
  (events): EventsViewModel[] => {
    return events.map(a => {
      console.log(a);

      return {
        id: a.id,
        start: a.end,
        end: a.start,
        day: a.day,
        classType: a.classType
      };
    });
  }
);
