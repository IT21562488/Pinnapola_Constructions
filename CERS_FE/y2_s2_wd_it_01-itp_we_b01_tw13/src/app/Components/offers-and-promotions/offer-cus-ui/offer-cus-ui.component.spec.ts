import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCusUIComponent } from './offer-cus-ui.component';

describe('OfferCusUIComponent', () => {
  let component: OfferCusUIComponent;
  let fixture: ComponentFixture<OfferCusUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCusUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCusUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
