import { TestBed } from '@angular/core/testing';

import { OffertsService } from './offerts.service';

describe('OffertsService', () => {
  let service: OffertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
