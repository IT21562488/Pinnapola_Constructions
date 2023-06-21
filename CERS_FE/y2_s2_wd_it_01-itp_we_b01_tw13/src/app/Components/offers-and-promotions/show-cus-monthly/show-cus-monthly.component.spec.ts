import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCusMonthlyComponent } from './show-cus-monthly.component';

describe('ShowCusMonthlyComponent', () => {
  let component: ShowCusMonthlyComponent;
  let fixture: ComponentFixture<ShowCusMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCusMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCusMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
