import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAndPaymentComponent } from './billing-and-payment.component';

describe('BillingAndPaymentComponent', () => {
  let component: BillingAndPaymentComponent;
  let fixture: ComponentFixture<BillingAndPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingAndPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
