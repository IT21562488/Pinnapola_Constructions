import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCusOfferComponent } from './show-cus-offer.component';

describe('ShowCusOfferComponent', () => {
  let component: ShowCusOfferComponent;
  let fixture: ComponentFixture<ShowCusOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCusOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCusOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
