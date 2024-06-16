import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User{
  id? : number;
  firstname : string;
  lastname : string;
  email: string;
  phone?: string;
  gender: string;
  birthdate: string ;
  description?: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/register'; 

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
