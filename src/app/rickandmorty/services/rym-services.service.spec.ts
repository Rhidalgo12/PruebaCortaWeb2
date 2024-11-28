import { TestBed } from '@angular/core/testing';

import { RymServicesService } from './rym-services.service';

describe('RymServicesService', () => {
  let service: RymServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RymServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
