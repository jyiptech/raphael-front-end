import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfTableNFormComponent } from './rf-table-n-form.component';

describe('RfTableNFormComponent', () => {
  let component: RfTableNFormComponent;
  let fixture: ComponentFixture<RfTableNFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfTableNFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfTableNFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
