import { TestBed } from '@angular/core/testing';

import { EmpguardGuard } from './empguard.guard';

describe('EmpguardGuard', () => {
  let guard: EmpguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
