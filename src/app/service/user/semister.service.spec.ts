import { TestBed } from '@angular/core/testing';

import { SemisterService } from './semister.service';

describe('SemisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemisterService = TestBed.get(SemisterService);
    expect(service).toBeTruthy();
  });
});
