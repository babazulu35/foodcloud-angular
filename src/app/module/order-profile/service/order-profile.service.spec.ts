import { TestBed, inject } from '@angular/core/testing';

import { OrderProfileService } from './order-profile.service';

describe('OrderProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderProfileService]
    });
  });

  it('should be created', inject([OrderProfileService], (service: OrderProfileService) => {
    expect(service).toBeTruthy();
  }));
});
