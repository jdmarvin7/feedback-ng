import { TestBed } from '@angular/core/testing';

import { ServiceSendService } from './service-send.service';

describe('ServiceSendService', () => {
  let service: ServiceSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
