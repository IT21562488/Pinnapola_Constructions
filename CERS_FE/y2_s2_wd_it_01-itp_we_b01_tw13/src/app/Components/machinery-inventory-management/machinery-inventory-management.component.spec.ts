import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryInventoryManagementComponent } from './machinery-inventory-management.component';

describe('MachineryInventoryManagementComponent', () => {
  let component: MachineryInventoryManagementComponent;
  let fixture: ComponentFixture<MachineryInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryInventoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
