import { TestBed } from '@angular/core/testing';

import { RfTableNFormService } from './rf-table-n-form.service';

describe('RfTableNFormService', () => {
  let service: RfTableNFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RfTableNFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
