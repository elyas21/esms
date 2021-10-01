import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SudoEvent } from 'src/app/model/event';

export const loadEvents = createAction('[Event/API] Load Events', props<{ section: string }>());
export const loadEventsSucsess = createAction(
  '[Event/API] Load Events Sucsess',
  props<{ events: SudoEvent[] }>()
);
export const loadEventsFaliure = createAction(
  '[Event/API] Load Events Faliure',
  props<{ error: any }>()
);
export const loadEvent = createAction('[Event/API] Load Event', props<{ id: string }>());
export const loadEventSucsess = createAction(
  '[Event/API] Load Event Sucsess',
  props<{ event: SudoEvent }>()
);
export const loadEventFaliure = createAction(
  '[Event/API] Load Event Faliure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL SUDO EVENT ** */
/****************************************************************** */
export const upsertEvent = createAction('[Event/API] Upsert Event', props<{ event: SudoEvent }>());
export const upsertEventSuccess = createAction(
  '[Event/API] Upsert Event Success',
  props<{ event: SudoEvent }>()
);
export const upsertEventFailure = createAction(
  '[Event/API] Upsert Event failure',
  props<{ error: any }>()
);

export const addEvent = createAction('[Event/API] Add Event', props<{ event: any }>());
export const addEventSuccess = createAction(
  '[Event/API] Add Event Success',
  props<{ event: SudoEvent }>()
);
export const addEventFaliure = createAction(
  '[Event/API] Add Event Faliure',
  props<{ error: string }>()
);

// export const upsertEvent = createAction('[Event/API] Upsert Event', props<{ event: SudoEvent }>());

export const addEvents = createAction('[Event/API] Add Events', props<{ events: SudoEvent[] }>());

// export const upsertEvents = createAction(
//   '[Event/API] Upsert Events',
//   props<{ events: SudoEvent[] }>()
// );

export const updateEvent = createAction(
  '[Event/API] Update Event',
  props<{ event: Update<any> }>()
);
export const updateEventSuccess = createAction(
  '[Event/API] Update Event Success',
  props<{ event: Update<SudoEvent> }>()
);
export const updateEventFaliure = createAction('[Event/API] Update Event', props<{ error: any }>());

export const updateEvents = createAction(
  '[Event/API] Update Events',
  props<{ events: Update<SudoEvent>[] }>()
);

export const deleteEvent = createAction('[Event/API] Delete Event', props<{ id: string }>());

export const deleteEvents = createAction('[Event/API] Delete Events', props<{ ids: string[] }>());

export const clearEvents = createAction('[Event/API] Clear Events');
