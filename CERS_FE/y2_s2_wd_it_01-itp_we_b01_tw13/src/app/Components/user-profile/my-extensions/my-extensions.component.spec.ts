import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExtensionsComponent } from './my-extensions.component';

describe('MyExtensionsComponent', () => {
  let component: MyExtensionsComponent;
  let fixture: ComponentFixture<MyExtensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExtensionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
