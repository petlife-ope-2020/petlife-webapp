import { TestBed } from '@angular/core/testing';

import { ScheduledServicesService } from './scheduled-services.service';

describe('ScheduledServicesService', () => {
  let service: ScheduledServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
