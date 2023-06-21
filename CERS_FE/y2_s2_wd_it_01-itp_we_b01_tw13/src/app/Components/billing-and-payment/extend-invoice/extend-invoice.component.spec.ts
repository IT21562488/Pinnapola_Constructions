import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendInvoiceComponent } from './extend-invoice.component';

describe('ExtendInvoiceComponent', () => {
  let component: ExtendInvoiceComponent;
  let fixture: ComponentFixture<ExtendInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
