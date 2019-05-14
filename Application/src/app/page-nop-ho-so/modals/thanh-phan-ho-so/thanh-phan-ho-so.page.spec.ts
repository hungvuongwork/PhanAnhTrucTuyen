import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhPhanHoSoPage } from './thanh-phan-ho-so.page';

describe('ThanhPhanHoSoPage', () => {
  let component: ThanhPhanHoSoPage;
  let fixture: ComponentFixture<ThanhPhanHoSoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhPhanHoSoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhPhanHoSoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
