import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEemple1Component } from './form-eemple1.component';

describe('FormEemple1Component', () => {
  let component: FormEemple1Component;
  let fixture: ComponentFixture<FormEemple1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEemple1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEemple1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
