import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userId;
  private userPassword;
  private errorMessage;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  login() {
    // alert(this.userId);
    // alert(this.userPassword);
    if (this.userId == "ADMIN" && this.userPassword == "123abcxyz") {
      this.router.navigate(['programacao-barragem']);
    } else {
      this.errorMessage = "Usuário ou senha inválido."
    }
  }

}
