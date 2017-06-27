import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProgramacaoBarragemService} from '../service/programacao-barragem.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProgramacaoBarragemService]
})
export class IndexComponent implements OnInit {

  //Esta tabela serve para indicar o codigo ASCII a String
  tabConversao = {"48" : "0", "124" : "|", "49" : "1"} 
  tabComportas = {"0" : "Desligado", "1" : "Ligado"}

  status = ["Ligado", "Desligado"];
  stBarragem01:String = 'Ligado';
  stBarragem02:String = 'Ligado';
  stBarragem03:String = 'Ligado';

  constructor(private router: Router, private programacaoBarragemService: ProgramacaoBarragemService) { }

  ngOnInit() {
    this.obterValores()
  }

  obterValores() {
    var service = this.programacaoBarragemService.obter();
    service.subscribe(
        response => {
          //Converte de codigo ASCII para String
          var result = ""
          response.res.data.forEach(element => {
            result += this.tabConversao[element];
          });
          var comportas = result.split("|");
          this.stBarragem01 = this.tabComportas[comportas[0]]
          this.stBarragem02 = this.tabComportas[comportas[1]]
          this.stBarragem03 = this.tabComportas[comportas[2]]
        },
        error => {
          alert(error);
        }
    );
  }


  login() {
    this.router.navigate(['login']);
  }

  inscricao() {
    this.router.navigate(['inscricao']);
  }

}
