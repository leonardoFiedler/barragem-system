import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-programacao-barragem',
  templateUrl: './programacao-barragem.component.html',
  styleUrls: ['./programacao-barragem.component.css']
})
export class ProgramacaoBarragemComponent implements OnInit {

  private status = ["Ligado", "Desligado"];
  private stBarragem01:String = "Ligado";

  constructor(private router: Router) { }

  ngOnInit() {
  }




}
