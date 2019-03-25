import { TestBed } from '@angular/core/testing';

import { AfiliadosService } from './afiliados.service';

describe('AfiliadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfiliadosService = TestBed.get(AfiliadosService);
    expect(service).toBeTruthy();
  });
});
