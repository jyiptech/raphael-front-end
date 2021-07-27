import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormFieldSetComponent } from './dynamic-form-field-set.component';

describe('DynamicFormFieldSetComponent', () => {
  let component: DynamicFormFieldSetComponent;
  let fixture: ComponentFixture<DynamicFormFieldSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormFieldSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormFieldSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
