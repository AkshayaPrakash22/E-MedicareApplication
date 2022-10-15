import { TestBed } from '@angular/core/testing';

import { AddtocartService } from './addtocart.service';

describe('AddtocartService', () => {
  let service: AddtocartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtocartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
