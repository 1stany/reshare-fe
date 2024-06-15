import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
//ng add @angular/material
// Angular Material per i componenti dell'interfaccia utente
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  token = '';
  router: any;

  constructor(private http : HttpClient, private loginService: LoginService){
    this.loginService = loginService;
  }

  ngOnInit(): void {}

  login(){
    if (this.email.length > 0 && this.password.length > 0) {
      // Invia la richiesta di login
      this.loginService.login(this.email, this.password)
      .subscribe((response: any) => {
        // Gestisce la risposta del server
        if (response.token) {
          // Memorizza il token di autenticazione
          localStorage.setItem('token', response.token);
          // Reindirizza l'utente alla pagina di destinazione
          this.router.navigate(['/']);
        } else {
          
          alert('Credenziali non valide');
        }
      }, (error: any) => {
        console.error(error);
      });
    } else {
      alert('Inserisci un email e una password valide');
    }
  }
}




