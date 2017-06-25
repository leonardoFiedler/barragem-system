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

  //Esta tabela serve para indicar o codigo ASCII a String
  tabConversao = {"48" : "0", "124" : "|", "49" : "1"} 
  tabComportas = {"0" : "Desligado", "1" : "Ligado"}

  status = ["Ligado", "Desligado"];
  stBarragem01:String = 'Ligado';
  stBarragem02:String = 'Ligado';
  stBarragem03:String = 'Ligado';
  mensagem = "";

  constructor(private router: Router, private programacaoBarragemService: ProgramacaoBarragemService) { }

  ngOnInit() {
    this.obterValores();
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

          console.log("Result " + result);
          
          var comportas = result.split("|");
          console.log("Valor na 0 " + this.tabComportas[comportas[0]]);
          console.log("Valor na 1 " + this.tabComportas[comportas[1]]);
          console.log("Valor na 2 " + this.tabComportas[comportas[2]]);

          this.stBarragem01 = this.tabComportas[comportas[0]]
          this.stBarragem02 = this.tabComportas[comportas[1]]
          this.stBarragem03 = this.tabComportas[comportas[2]]
        },
        error => {
          alert(error);
        }
    );
  }


  definirValores() {
    var valores = ""

    if (this.stBarragem01 == "Ligado") {
      valores += "1|"
    } else {
      valores += "0|"
    }

    if (this.stBarragem02 == "Ligado") {
      valores += "1|"
    } else {
      valores += "0|"
    }

    if (this.stBarragem03 == "Ligado") {
      valores += "1"
    } else {
      valores += "0"
    }

    console.log("Valores para definir " + valores)

    var service = this.programacaoBarragemService.definir(valores);
    service.subscribe(
        response => {
          console.log(response.res);
        },
        error => {
          alert(error);
        }
    );
  }
}
