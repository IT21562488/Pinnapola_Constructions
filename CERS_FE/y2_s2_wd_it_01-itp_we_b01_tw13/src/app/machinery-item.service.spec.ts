import { TestBed } from '@angular/core/testing';

import { MachineryItemService } from './Services/machinery-item.service';

describe('MachineryItemService', () => {
  let service: MachineryItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineryItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
