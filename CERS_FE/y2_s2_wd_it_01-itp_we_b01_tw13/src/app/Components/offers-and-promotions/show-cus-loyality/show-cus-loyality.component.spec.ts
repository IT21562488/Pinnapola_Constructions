import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCusLoyalityComponent } from './show-cus-loyality.component';

describe('ShowCusLoyalityComponent', () => {
  let component: ShowCusLoyalityComponent;
  let fixture: ComponentFixture<ShowCusLoyalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCusLoyalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCusLoyalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
