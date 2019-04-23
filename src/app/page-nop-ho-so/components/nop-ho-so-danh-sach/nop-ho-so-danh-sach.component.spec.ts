import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoDanhSachComponent } from './nop-ho-so-danh-sach.component';

describe('NopHoSoDanhSachComponent', () => {
  let component: NopHoSoDanhSachComponent;
  let fixture: ComponentFixture<NopHoSoDanhSachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoDanhSachComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoDanhSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
