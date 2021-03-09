import { TestBed } from '@angular/core/testing';

import { ServicesRequestsServicesService } from './services-requests-services.service';

describe('ServicesRequestsServicesService', () => {
  let service: ServicesRequestsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesRequestsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
