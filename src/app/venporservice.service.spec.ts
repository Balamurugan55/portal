import { TestBed } from '@angular/core/testing';

import { VenporserviceService } from './venporservice.service';

describe('VenporserviceService', () => {
  let service: VenporserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenporserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
