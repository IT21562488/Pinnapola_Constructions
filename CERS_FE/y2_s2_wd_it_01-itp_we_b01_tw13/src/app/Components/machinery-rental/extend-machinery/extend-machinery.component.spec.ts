import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendMachineryComponent } from './extend-machinery.component';

describe('ExtendMachineryComponent', () => {
  let component: ExtendMachineryComponent;
  let fixture: ComponentFixture<ExtendMachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendMachineryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
