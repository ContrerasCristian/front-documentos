import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
  }

  correo: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    this.authService.login(this.correo, this.contrasena).subscribe(
      response => {
        this.router.navigate([response.redirect]);
      },
      error => { this.mensajeError = error.error.error; }
    )
  }

}
