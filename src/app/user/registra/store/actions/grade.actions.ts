import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Grade } from '../../../../model/Grade';

export const loadGrades = createAction('[Grade/API] Load Grades');
export const loadGradesSuccess = createAction(
  '[Grade/API] Load Grades Success',
  props<{ grades: Grade[] }>()
);
export const loadGradesFailure = createAction(
  '[Grade/API] Load Grades Failure',
  props<{ error: any }>()
);

export const addGrade = createAction('[Grade/API] Add Grade', props<{ grade: Grade }>());

export const upsertGrade = createAction('[Grade/API] Upsert Grade', props<{ grade: Grade }>());

export const addGrades = createAction('[Grade/API] Add Grades', props<{ grades: Grade[] }>());

export const upsertGrades = createAction('[Grade/API] Upsert Grades', props<{ grades: Grade[] }>());

export const updateGrade = createAction(
  '[Grade/API] Update Grade',
  props<{ grade: Update<Grade> }>()
);

export const updateGrades = createAction(
  '[Grade/API] Update Grades',
  props<{ grades: Update<Grade>[] }>()
);

export const deleteGrade = createAction('[Grade/API] Delete Grade', props<{ id: string }>());

export const deleteGrades = createAction('[Grade/API] Delete Grades', props<{ ids: string[] }>());

export const clearGrades = createAction('[Grade/API] Clear Grades');
