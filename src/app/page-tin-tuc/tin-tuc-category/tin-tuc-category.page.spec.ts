import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucCategoryPage } from './tin-tuc-category.page';

describe('TinTucCategoryPage', () => {
  let component: TinTucCategoryPage;
  let fixture: ComponentFixture<TinTucCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
