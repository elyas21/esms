import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { SudoEvent } from 'src/app/model/event';

export const loadEvents = createAction('[ Sudo Event/API] Load Events', props<{ section: string }>());
export const loadEventsSucsess = createAction(
  '[ Sudo Event/API] Load Events Sucsess',
  props<{ events: SudoEvent[] }>()
);
export const loadEventsFaliure = createAction(
  '[ Sudo Event/API] Load Events Faliure',
  props<{ error: any }>()
);
export const loadEvent = createAction('[ Sudo Event/API] Load Event', props<{ id: string }>());
export const loadEventSucsess = createAction(
  '[ Sudo Event/API] Load Event Sucsess',
  props<{ event: SudoEvent }>()
);
export const loadEventFaliure = createAction(
  '[ Sudo Event/API] Load Event Faliure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL SUDO EVENT ** */
/****************************************************************** */
export const upsertEvent = createAction('[ Sudo Event/API] Upsert Event', props<{ event: SudoEvent }>());
export const upsertEventSuccess = createAction(
  '[ Sudo Event/API] Upsert Event Success',
  props<{ event: SudoEvent }>()
);
export const upsertEventFailure = createAction(
  '[ Sudo Event/API] Upsert Event failure',
  props<{ error: any }>()
);

export const addEvent = createAction('[ Sudo Event/API] Add Event', props<{ event: any }>());
export const addEventSuccess = createAction(
  '[ Sudo Event/API] Add Event Success',
  props<{ event: SudoEvent }>()
);
export const addEventFaliure = createAction(
  '[ Sudo Event/API] Add Event Faliure',
  props<{ error: string }>()
);

// export const upsertEvent = createAction('[ Sudo Event/API] Upsert Event', props<{ event: SudoEvent }>());

export const addEvents = createAction('[ Sudo Event/API] Add Events', props<{ events: SudoEvent[] }>());

// export const upsertEvents = createAction(
//   '[ Sudo Event/API] Upsert Events',
//   props<{ events: SudoEvent[] }>()
// );

export const updateEvent = createAction(
  '[ Sudo Event/API] Update Event',
  props<{ event: Update<any> }>()
);
export const updateEventSuccess = createAction(
  '[ Sudo Event/API] Update Event Success',
  props<{ event: SudoEvent }>()
);
export const updateEventFaliure = createAction('[ Sudo Event/API] Update Event', props<{ error: any }>());

export const updateEvents = createAction(
  '[ Sudo Event/API] Update Events',
  props<{ events: Update<SudoEvent>[] }>()
);

export const deleteEvent = createAction('[ Sudo Event/API] Delete Event', props<{ id: string }>());
export const deleteEventSuccess = createAction('[ Sudo Event/API] Delete Event Success', props<{ id: string }>());
export const deleteEventFaliure = createAction('[ Sudo Event/API] Delete Event Faliure', props<{ error: any }>());

export const deleteEvents = createAction('[ Sudo Event/API] Delete Events', props<{ ids: string[] }>());

export const clearEvents = createAction('[ Sudo Event/API] Clear Events');
