import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverViewComponent } from './sales-over-view.component';

describe('SalesOverViewComponent', () => {
  let component: SalesOverViewComponent;
  let fixture: ComponentFixture<SalesOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
