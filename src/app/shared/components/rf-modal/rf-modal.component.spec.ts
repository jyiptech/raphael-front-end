import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfModalComponent } from './rf-modal.component';

describe('RfModalComponent', () => {
  let component: RfModalComponent;
  let fixture: ComponentFixture<RfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
