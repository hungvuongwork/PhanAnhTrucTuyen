import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoSubmitsuccessPage } from './nop-ho-so-submitsuccess.page';

describe('NopHoSoSubmitsuccessPage', () => {
  let component: NopHoSoSubmitsuccessPage;
  let fixture: ComponentFixture<NopHoSoSubmitsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoSubmitsuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoSubmitsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
