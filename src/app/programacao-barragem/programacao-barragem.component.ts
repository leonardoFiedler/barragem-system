import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProgramacaoBarragemService} from '../service/programacao-barragem.service'

@Component({
  selector: 'app-programacao-barragem',
  templateUrl: './programacao-barragem.component.html',
  styleUrls: ['./programacao-barragem.component.css'],
  providers: [ProgramacaoBarragemService]
})
export class ProgramacaoBarragemComponent implements OnInit {

  status = ["Ligado", "Desligado"];
  stBarragem01:String = "Ligado";
  mensagem = "";

  constructor(private router: Router, private programacaoBarragemService: ProgramacaoBarragemService) { }

  ngOnInit() {
    
  }

  definirValores() {
    var service = this.programacaoBarragemService.obter();
    service.subscribe(
        response => {
          alert("Deu bom " + response.res);
        },
        error => {
          alert(error);
        }
    );


    // var service = this.programacaoBarragemService.definir("0|0|0");
    // service.subscribe(
    //     response => {
    //       this.mensagem = response.json;
    //     },
    //     error => {
    //       var errorMessage = JSON.parse(error.text()).result;
    //       this.mensagem = errorMessage;
    //     }
    // );
  }
}
