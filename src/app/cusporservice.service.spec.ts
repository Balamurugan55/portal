import { TestBed } from '@angular/core/testing';

import { CusporserviceService } from './cusporservice.service';

describe('CusporserviceService', () => {
  let service: CusporserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusporserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
