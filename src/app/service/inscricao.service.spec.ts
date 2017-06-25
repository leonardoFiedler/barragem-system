import { TestBed, inject } from '@angular/core/testing';

import { InscricaoService } from './inscricao.service';

describe('InscricaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscricaoService]
    });
  });

  it('should be created', inject([InscricaoService], (service: InscricaoService) => {
    expect(service).toBeTruthy();
  }));
});
