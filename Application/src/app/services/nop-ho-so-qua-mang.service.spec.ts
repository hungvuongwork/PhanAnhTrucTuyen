import { TestBed } from '@angular/core/testing';

import { NopHoSoQuaMangService } from './nop-ho-so-qua-mang.service';

describe('NopHoSoQuaMangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NopHoSoQuaMangService = TestBed.get(NopHoSoQuaMangService);
    expect(service).toBeTruthy();
  });
});
