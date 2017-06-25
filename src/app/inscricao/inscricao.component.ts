import { Component, OnInit } from '@angular/core';
import { InscricaoService } from '../service/inscricao.service'

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css'],
  providers: [InscricaoService]
})
export class InscricaoComponent implements OnInit {

  email:String = null;
  time = 0;
  times = [ {value: '0', viewValue: '1 hora'},
    {value: '1', viewValue: '2 horas'},
    {value: '2', viewValue: '4 horas'},
    {value: '3', viewValue: '8 horas'},
    {value: '4', viewValue: '12 horas'},
    {value: '5', viewValue: '24 horas'}
  ];

  constructor(private inscricaoService:InscricaoService) { }

  ngOnInit() { }

  inscrever() {
    alert("E-mail " + this.email);
    alert("time " + this.time);
    
  }
}
