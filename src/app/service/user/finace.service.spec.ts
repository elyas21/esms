import { TestBed } from '@angular/core/testing';

import { FinaceService } from './finace.service';

describe('FinaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinaceService = TestBed.get(FinaceService);
    expect(service).toBeTruthy();
  });
});
