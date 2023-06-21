import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiceComponent } from './show-vehice.component';

describe('ShowVehiceComponent', () => {
  let component: ShowVehiceComponent;
  let fixture: ComponentFixture<ShowVehiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVehiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVehiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
