import { Action, createReducer, on } from '@ngrx/store';
import { Section } from 'src/app/model/Section';
import * as SectionActions from '../actions/section.actions';

export const sectionFeatureKey = 'section';

export interface State {
  sections: Section[];
  error: any;
}

export const initialState: State = {
  sections: null,
  error: null
};

export const reducer = createReducer(
  initialState,

  on(SectionActions.loadSections, state => state),
  on(SectionActions.loadSectionsSuccess, (state, action) => {
    return {
      sections: action.sections,
      error: null
    };
  }),
  on(SectionActions.loadSectionsFailure, (state, action) => state)
);
