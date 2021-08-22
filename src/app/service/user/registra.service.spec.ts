import { TestBed } from '@angular/core/testing';

import { RegistraService } from './registra.service';

describe('RegistraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistraService = TestBed.get(RegistraService);
    expect(service).toBeTruthy();
  });
});
