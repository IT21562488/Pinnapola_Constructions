import { TestBed } from '@angular/core/testing';

import { VehicleListService } from './Services/vehicle-list.service';

describe('VehicleListService', () => {
  let service: VehicleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
