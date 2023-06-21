import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendVehicleComponent } from './extend-vehicle.component';

describe('ExtendVehicleComponent', () => {
  let component: ExtendVehicleComponent;
  let fixture: ComponentFixture<ExtendVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
