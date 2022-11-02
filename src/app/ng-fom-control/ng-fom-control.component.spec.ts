import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFomControlComponent } from './ng-fom-control.component';

describe('NgFomControlComponent', () => {
  let component: NgFomControlComponent;
  let fixture: ComponentFixture<NgFomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFomControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
