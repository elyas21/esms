import * as fromSchedule from './schedule.actions';

describe('loadSchedules', () => {
  it('should return an action', () => {
    expect(fromSchedule.loadSchedules().type).toBe('[Schedule] Load Schedules');
  });
});
