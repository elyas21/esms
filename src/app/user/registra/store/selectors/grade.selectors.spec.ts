import * as fromGrade from '../reducers/grade.reducer';
import { selectGradeState } from './grade.selectors';

describe('Grade Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGradeState({
      [fromGrade.gradeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
