import { TestBed } from '@angular/core/testing';

import { NgQSDropdownService } from './ng-qsdropdown.service';

describe('NgQSDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgQSDropdownService = TestBed.get(NgQSDropdownService);
    expect(service).toBeTruthy();
  });
});
