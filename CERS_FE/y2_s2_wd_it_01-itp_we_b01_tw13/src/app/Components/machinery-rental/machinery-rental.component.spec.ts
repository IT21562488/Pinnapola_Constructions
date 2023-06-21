import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryRentalComponent } from './machinery-rental.component';

describe('MachineryRentalComponent', () => {
  let component: MachineryRentalComponent;
  let fixture: ComponentFixture<MachineryRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
