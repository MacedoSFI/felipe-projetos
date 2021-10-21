import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = { email: '', password: '' };

  constructor(private loginService: LoginService, private router: Router) { }

  public login() {
    console.log("teste e-mail: " + this.usuario.email + "senha: " + this.usuario.password);
    this.loginService.login(this.usuario);
  }


  ngOnInit() {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token')?.toString !== null) {
      this.router.navigate(['home']);
    }
  }

}
