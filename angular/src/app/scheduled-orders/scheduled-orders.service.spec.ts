import { TestBed } from '@angular/core/testing';

import { ScheduledOrdersService } from './scheduled-orders.service';

describe('ScheduledOrdersService', () => {
  let service: ScheduledOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
