import * as fromSchedule from './event.actions';

describe('loadSchedules', () => {
  it('should return an action', () => {
    expect(fromSchedule.loadSchedules().type).toBe('[Schedule] Load Schedules');
  });
});
