import { HttpClient } from '@angular/common/http';
import { Component, OnInit, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface LoginAnswer {
  token : string;
}



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

  constructor(private http : HttpClient){}

  ngOnInit(): void {}

  onSubmit(){}

  login() : void {
    const user = { email: this.email, password: this.password};
    this.http.post<LoginAnswer>('/api/login', user).subscribe(
      (answer) => {
        this.token = answer.token;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


