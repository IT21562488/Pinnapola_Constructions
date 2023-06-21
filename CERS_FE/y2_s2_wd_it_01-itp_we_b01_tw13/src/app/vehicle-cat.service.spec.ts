import { TestBed } from '@angular/core/testing';

import { VehicleCatService } from './Services/vehicle-cat.service';

describe('VehicleCatService', () => {
  let service: VehicleCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
