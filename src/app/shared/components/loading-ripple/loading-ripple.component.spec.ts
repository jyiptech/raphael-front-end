import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingRippleComponent } from './loading-ripple.component';

describe('LoadingRippleComponent', () => {
  let component: LoadingRippleComponent;
  let fixture: ComponentFixture<LoadingRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingRippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
