import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAndPromotionsComponent } from './offers-and-promotions.component';

describe('OffersAndPromotionsComponent', () => {
  let component: OffersAndPromotionsComponent;
  let fixture: ComponentFixture<OffersAndPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersAndPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersAndPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
