import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Event } from 'src/app/model/event';

export const loadWeeklyEvents = createAction(
  '[Event] Load WeeklyEvents',
  props<{ section: string; range: { start: string; end: string } }>()
);
export const removeWeeklyEvents = createAction('[Event] Remove weekly events');
export const loadWeeklyEventsSuccess = createAction(
  '[Event] Load WeeklyEvents Success',
  props<{ events: any }>()
);
export const deleteEvent = createAction('[ Event Event/API] Delete Event', props<{ id: string }>());

export const loadWeeklyEventsFailure = createAction(
  '[Event] Load WeeklyEvents Failure',
  props<{ error: any }>()
);
export const PopulateEvents = createAction(
  '[Events] PopulateEvents',
  props<{section:string; range: any; events: Event[] }>()
);
export const PopulateEventsSccusses = createAction(
  '[Events] PopulateEvents Sccusses',
  props<{ events: Event[] }>()
);
export const PopulateEventsFaliure = createAction(
  '[Events] PopulateEvents Faliure',
  props<{ error: any }>()
);
export const updateEvent = createAction(
  '[ Events] Update Event',
  props<{ event: Update<any> }>()
);
export const updateEventSuccess = createAction(
  '[ Events] Update Event Success',
  props<{ event: Event }>()
);
export const updateEventFaliure = createAction('[ Events] Update Event', props<{ error: any }>());
