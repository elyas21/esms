import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Time } from 'src/app/model/event';
// import {  } from '../mo';
import * as fromEvent from '../reducers/sudoevent.reducer';

export const selectGradeState = createFeatureSelector<fromEvent.State>(fromEvent.eventsFeatureKey);
export interface EventsViewModel {
  id: string;
  start: Time;
  end: Time;
  classType: string;
  day: number;
}
// export const selectGradeViewModel = createSelector(
//   selectGradeState,
//   (state: fromEvent.State): GradesViewModel => {
//     return {
//       grades: state.grades
//     };
//   }
// );
// export const selecxtProducts = createSelector(
//   selectGradeState,
//   state => state[fromEvent.eventsFeatureKey].
// );
export const selectAllEntites = createSelector(selectGradeState, fromEvent.selectAll);

export const selectEventViewModel = createSelector(
  selectAllEntites,
  (events): EventsViewModel[] => {
    return events.map(a => {
      return {
        id: a.id,
        start: {
          dateTime: `2021-09-11T${a.start}+03:00`,
          timeZone: `America/Los_Angeles`
        },
        end: {
          dateTime: `2021-09-11T${a.end}+03:00`,
          timeZone: `America/Los_Angeles`
        },
        day: a.day,
        classType: a.classType
      };
    });
  }
);

export const selectSudoEventViewModel = createSelector(
  selectAllEntites,
  (events): EventsViewModel[] => {
    return events.map(a => {
      return {
        id: a.id,
        start: a.start,
        end: a.end,
        day: a.day,
        classType: a.classType
      };
    });
  }
);

export const selectSudoEventViewByDayModel = createSelector(selectAllEntites, (grades): any[] => {
  let a;

  grades.map(a => {
    return {
      id: a.id,
      start: {
        dateTime: `2021-09-11T${a.start}+03:00`,
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: `2021-09-11T${a.end}+03:00`,
        timeZone:   `America/Los_Angeles`
      },
      classType: a.classType,
      day: a.day
    };
  });
  return [];
});

// it need must fix it is not proper way to get data
export const selectEntityById = (props: { id: number }) =>
  createSelector(selectAllEntites, entities => {
    // return entities[props.id];
    for (const iterator of entities) {
      if (iterator.id == props.id.toString()) {
        return iterator;
      }
    }
    return null;
  });
