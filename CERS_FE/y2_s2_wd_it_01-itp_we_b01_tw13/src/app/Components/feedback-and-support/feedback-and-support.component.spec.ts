import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAndSupportComponent } from './feedback-and-support.component';

describe('FeedbackAndSupportComponent', () => {
  let component: FeedbackAndSupportComponent;
  let fixture: ComponentFixture<FeedbackAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackAndSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
