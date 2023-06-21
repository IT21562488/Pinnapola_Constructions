import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRentalComponent } from './vehicle-rental.component';

describe('VehicleRentalComponent', () => {
  let component: VehicleRentalComponent;
  let fixture: ComponentFixture<VehicleRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
