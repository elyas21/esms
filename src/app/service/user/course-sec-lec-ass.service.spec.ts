import { TestBed } from '@angular/core/testing';

import { CourseSecLecAssService } from './course-sec-lec-ass.service';

describe('CourseSecLecAssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseSecLecAssService = TestBed.get(CourseSecLecAssService);
    expect(service).toBeTruthy();
  });
});
