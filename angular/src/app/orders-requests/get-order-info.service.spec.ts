import { TestBed } from '@angular/core/testing';

import { GetOrderInfoService } from './get-order-info.service';

describe('GetOrderInfoService', () => {
  let service: GetOrderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
