import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private register: Register) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.registerService.registerUser(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

}
