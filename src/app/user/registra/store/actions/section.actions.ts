import { createAction, props } from '@ngrx/store';
import { Section } from '../../../../model/Section';
export const loadSections = createAction('[Section] Load Sections', props<{ id: number }>());

export const loadSectionsSuccess = createAction(
  '[Section] Load Sections Success',
  props<{ sections: Section[] }>()
);

export const loadSectionsFailure = createAction(
  '[Section] Load Sections Failure',
  props<{ error: any }>()
);
