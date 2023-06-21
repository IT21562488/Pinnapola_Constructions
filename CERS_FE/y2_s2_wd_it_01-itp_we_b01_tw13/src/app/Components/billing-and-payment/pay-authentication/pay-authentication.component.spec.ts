import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAuthenticationComponent } from './pay-authentication.component';

describe('PayAuthenticationComponent', () => {
  let component: PayAuthenticationComponent;
  let fixture: ComponentFixture<PayAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
