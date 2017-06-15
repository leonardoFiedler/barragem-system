import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoBarragemComponent } from './programacao-barragem.component';

describe('ProgramacaoBarragemComponent', () => {
  let component: ProgramacaoBarragemComponent;
  let fixture: ComponentFixture<ProgramacaoBarragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacaoBarragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaoBarragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
