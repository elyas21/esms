import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grade } from 'src/app/model/Grade';
import * as fromGrade from '../reducers/grade.reducer';

export const selectGradeState = createFeatureSelector<fromGrade.State>(fromGrade.gradesFeatureKey);
export interface GradesViewModel {
  id: string;
  gradeId: string;
  gradeName: string;
  gradeno: number;
}
// export const selectGradeViewModel = createSelector(
//   selectGradeState,
//   (state: fromGrade.State): GradesViewModel => {
//     return {
//       grades: state.grades
//     };
//   }
// );
export const selectProducts = createSelector(
  selectGradeState,
  state => state[fromGrade.gradesFeatureKey].staffs
);
export const selectAllEntites = createSelector(selectGradeState, fromGrade.selectAll);

export const selectGradeViewModel = createSelector(selectAllEntites, grades =>{

 return grades.map(a => {
    return {
      id: a.id,
      gradeName: a.gradeName,
      gradeNo: a.grade
    };
  })}
);
