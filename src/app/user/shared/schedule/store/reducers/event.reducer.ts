import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as EventActions from '../actions/event.actions';
import { Event } from 'src/app/model/event';

export const eventsFeatureKey = 'events';

export interface State extends EntityState<Event> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>({
  selectId: (event: Event) => event.id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null
});

export const reducer = createReducer(
  initialState,
  // on(EventActions.PopulateEventsSccusses, (state, action) => {
  //   console.log(action);

  //   return adapter.upsertMany(action.events, state);
  // }),
  on(EventActions.PopulateEventsFaliure, (state, action) => {
    console.log('error on event redudcer');

    return {
      ...state,
      error: action.error
    };
  }),
  on(EventActions.UpsertEvent, (state, action)=>{
    return adapter.upsertOne( action.event ,state)
  }),

  on(EventActions.removeWeeklyEvents, (state, action) => {
    console.log('removing');
    
    return adapter.removeAll(state);
  }),
  on(EventActions.loadWeeklyEventsSuccess, (state, action) => {
    console.log(action);

    return adapter.setAll(action.events, state);
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
