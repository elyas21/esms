import { TestBed } from '@angular/core/testing';

import { CourseGradeingService } from './course-gradeing.service';

describe('CourseGradeingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseGradeingService = TestBed.get(CourseGradeingService);
    expect(service).toBeTruthy();
  });
});
