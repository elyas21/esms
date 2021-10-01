import * as fromSchedule from '../reducers/schedule.reducer';
import { selectScheduleState } from './schedule.selectors';

describe('Schedule Selectors', () => {
  it('should select the feature state', () => {
    const result = selectScheduleState({
      [fromSchedule.scheduleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
