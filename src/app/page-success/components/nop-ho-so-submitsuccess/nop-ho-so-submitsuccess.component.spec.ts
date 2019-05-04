import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoSubmitsuccessComponent } from './nop-ho-so-submitsuccess.component';

describe('NopHoSoSubmitsuccessComponent', () => {
  let component: NopHoSoSubmitsuccessComponent;
  let fixture: ComponentFixture<NopHoSoSubmitsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoSubmitsuccessComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoSubmitsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
