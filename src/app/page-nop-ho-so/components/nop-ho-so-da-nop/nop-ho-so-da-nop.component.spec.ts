import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoDaNopComponent } from './nop-ho-so-da-nop.component';

describe('NopHoSoDaNopComponent', () => {
  let component: NopHoSoDaNopComponent;
  let fixture: ComponentFixture<NopHoSoDaNopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoDaNopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoDaNopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
