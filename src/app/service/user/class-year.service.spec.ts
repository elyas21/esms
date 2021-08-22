import { TestBed } from '@angular/core/testing';

import { ClassYearService } from './class-year.service';

describe('ClassYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassYearService = TestBed.get(ClassYearService);
    expect(service).toBeTruthy();
  });
});
