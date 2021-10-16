import * as fromSchedule from '../reducers/event.reducer';
import { selectScheduleState } from './event.selectors';

describe('Schedule Selectors', () => {
  it('should select the feature state', () => {
    const result = selectScheduleState({
      [fromSchedule.eventsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
