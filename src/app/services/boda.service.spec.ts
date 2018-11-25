import { TestBed, inject } from '@angular/core/testing';

import { BodaService } from './boda.service';

describe('BodaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodaService]
    });
  });

  it('should be created', inject([BodaService], (service: BodaService) => {
    expect(service).toBeTruthy();
  }));
});
