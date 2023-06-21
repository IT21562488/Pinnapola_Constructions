import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachinesComponent } from './add-machines.component';

describe('AddMachinesComponent', () => {
  let component: AddMachinesComponent;
  let fixture: ComponentFixture<AddMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
