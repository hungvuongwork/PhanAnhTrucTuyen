import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucDetailPage } from './tin-tuc-detail.page';

describe('TinTucDetailPage', () => {
  let component: TinTucDetailPage;
  let fixture: ComponentFixture<TinTucDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
