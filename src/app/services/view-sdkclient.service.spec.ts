import { TestBed } from '@angular/core/testing';

import { ViewSDKClientService } from './view-sdkclient.service';

describe('ViewSDKClientService', () => {
  let service: ViewSDKClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSDKClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
