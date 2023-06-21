import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInventoryManagementComponent } from './vehicle-inventory-management.component';

describe('VehicleInventoryManagementComponent', () => {
  let component: VehicleInventoryManagementComponent;
  let fixture: ComponentFixture<VehicleInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInventoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
