import { TestBed, inject } from '@angular/core/testing';

import { ProgramacaoBarragemService } from './programacao-barragem.service';

describe('ProgramacaoBarragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramacaoBarragemService]
    });
  });

  it('should be created', inject([ProgramacaoBarragemService], (service: ProgramacaoBarragemService) => {
    expect(service).toBeTruthy();
  }));
});
