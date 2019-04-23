import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopHoSoUnregistryComponent } from './nop-ho-so-unregistry.component';

describe('NopHoSoUnregistryComponent', () => {
  let component: NopHoSoUnregistryComponent;
  let fixture: ComponentFixture<NopHoSoUnregistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopHoSoUnregistryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopHoSoUnregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
