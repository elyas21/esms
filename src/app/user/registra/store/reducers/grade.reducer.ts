import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Grade } from '../../../../model/Grade';
import * as GradeActions from '../actions/grade.actions';

export const gradesFeatureKey = 'grades';

export interface State extends EntityState<Grade> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Grade> = createEntityAdapter<Grade>({
  selectId: (staff: Grade) => staff.gradeId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null
});

export const reducer = createReducer(
  initialState,
  on(GradeActions.loadGradesSuccess, (state, action) => {
    return adapter.setAll(action.grades, state);
  }),
  on(GradeActions.loadGradesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })
  // on(GradeActions.addGrades, (state, action) => adapter.addMany(action.grades, state)),
  // on(GradeActions.upsertGrades, (state, action) => adapter.upsertMany(action.grades, state)),
  // on(GradeActions.updateGrade, (state, action) => adapter.updateOne(action.grade, state)),
  // on(GradeActions.updateGrades, (state, action) => adapter.updateMany(action.grades, state)),
  // on(GradeActions.deleteGrade, (state, action) => adapter.removeOne(action.id, state)),
  // on(GradeActions.deleteGrades, (state, action) => adapter.removeMany(action.ids, state)),

  // on(GradeActions.clearGrades, state => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
