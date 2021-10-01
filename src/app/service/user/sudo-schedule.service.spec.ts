import { TestBed } from '@angular/core/testing';

import { SudoScheduleService } from './sudo-schedule.service';

describe('SudoScheduleService', () => {
  let service: SudoScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudoScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
