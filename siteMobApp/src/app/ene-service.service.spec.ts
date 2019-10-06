import { TestBed } from '@angular/core/testing';

import { EneServiceService } from './ene-service.service';

describe('EneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EneServiceService = TestBed.get(EneServiceService);
    expect(service).toBeTruthy();
  });
});
