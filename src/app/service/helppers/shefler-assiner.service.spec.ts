import { TestBed } from '@angular/core/testing';

import { SheflerAssinerService } from './shefler-assiner.service';

describe('SheflerAssinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheflerAssinerService = TestBed.get(SheflerAssinerService);
    expect(service).toBeTruthy();
  });
});
