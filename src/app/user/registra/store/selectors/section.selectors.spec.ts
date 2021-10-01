import * as fromSection from '../reducers/section.reducer';
import { selectSectionState } from './section.selectors';

describe('Section Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSectionState({
      [fromSection.sectionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
