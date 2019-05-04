import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoSubmitdocPage } from './nop-ho-so-submitdoc.page';

describe('NopHoSoSubmitdocPage', () => {
  let component: NopHoSoSubmitdocPage;
  let fixture: ComponentFixture<NopHoSoSubmitdocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoSubmitdocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoSubmitdocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
