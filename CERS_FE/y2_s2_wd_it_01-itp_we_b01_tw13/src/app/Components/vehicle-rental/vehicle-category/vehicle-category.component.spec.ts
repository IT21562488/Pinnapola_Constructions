import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCategoryComponent } from './vehicle-category.component';

describe('VehicleCategoryComponent', () => {
  let component: VehicleCategoryComponent;
  let fixture: ComponentFixture<VehicleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
