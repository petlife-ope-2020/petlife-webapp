import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: RouterTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [RouterTestingModule]});
    router = TestBed.inject(RouterTestingModule);
  });

  it('should be created', () => {
    expect(router).toBeTruthy();
  });
});
