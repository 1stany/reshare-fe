import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService){}

  onSubmit(ngForm : NgForm){

    this.loginService.login(ngForm.value.email, ngForm.value.password).pipe(
      tap(() => {
        this.router.navigate(['']);
      }),
      catchError((error: any) => {
        return of(null);
      })
    )
    .subscribe();
  }
 
}




