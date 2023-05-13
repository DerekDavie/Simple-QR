import { TestBed } from '@angular/core/testing';

import { UpdateQRCodeService } from './update-qrcode.service';

describe('UpdateQRCodeService', () => {
  let service: UpdateQRCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateQRCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
