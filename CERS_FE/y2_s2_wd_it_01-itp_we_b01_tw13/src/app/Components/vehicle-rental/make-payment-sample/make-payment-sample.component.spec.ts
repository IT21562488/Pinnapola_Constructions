import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentSampleComponent } from './make-payment-sample.component';

describe('MakePaymentSampleComponent', () => {
  let component: MakePaymentSampleComponent;
  let fixture: ComponentFixture<MakePaymentSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePaymentSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakePaymentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
