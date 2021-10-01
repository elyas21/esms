import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as EventActions from '../actions/event.actions';
import { SudoEvent } from 'src/app/model/event';

export const eventsFeatureKey = 'events';

export interface State extends EntityState<SudoEvent> {
  // additional entities state properties
}

export const adapter: EntityAdapter<SudoEvent> = createEntityAdapter<SudoEvent>({
  selectId: (event: SudoEvent) => event.id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(EventActions.loadEventsSucsess, (state, action) => {
    return adapter.setAll(action.events, state);
  }),
  on(
    EventActions.loadEventsFaliure,
    EventActions.loadEventFaliure,
    EventActions.upsertEventFailure,
    EventActions.addEventFaliure,
    EventActions.updateEventFaliure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(EventActions.loadEventSucsess, (state, action) => adapter.addOne(action.event, state)),

  on(EventActions.addEventSuccess, (state, { event }) => {
    console.log(event);

    return adapter.addOne(event, state);
  }),
  on(EventActions.upsertEventSuccess, (state, action) => adapter.upsertOne(action.event, state)),
  on(EventActions.addEvents, (state, action) => adapter.addMany(action.events, state)),
  // on(EventActions.upsertEvents, (state, action) => adapter.upsertMany(action.events, state)),
  on(EventActions.updateEventSuccess, (state, action) => {
    console.log(action.event);
    
    return adapter.updateOne(action.event, state);
  }),
  on(EventActions.updateEvents, (state, action) => adapter.updateMany(action.events, state)),
  on(EventActions.deleteEvent, (state, action) => adapter.removeOne(action.id, state)),
  on(EventActions.deleteEvents, (state, action) => adapter.removeMany(action.ids, state)),

  on(EventActions.clearEvents, state => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
