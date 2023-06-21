import { TestBed } from '@angular/core/testing';

import { MachineryCatService } from './Services/machinery-cat.service';

describe('MachineryCatService', () => {
  let service: MachineryCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineryCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
