import { Component} from '@angular/core';
import { RegisterService, User } from '../services/register.service';
import { FormsModule, NgForm } from "@angular/forms";
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit(ngForm : NgForm){
    const currentUser : User = {
      firstname : ngForm.value.firstname,
      lastname : ngForm.value.lastname,
      email : ngForm.value.email,
      phone : ngForm.value.phone,
      gender: ngForm.value.gender,
      birthdate: ngForm.value.birthdate,
      description: ngForm.value.description,
      password: ngForm.value.password,
    }

    this.registerService.saveUser(currentUser).pipe(
      tap(() => {
        alert('Registrazione effettuata');
        this.router.navigate(['']);
      }),
      catchError((error: any) => {
        alert('Errore durante la registrazione');
        return of(null);
      })
    ).subscribe();
  }
}
