import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  firstname: String;
  lastname: String;
  user_type: String;
  phoneNumber: String;
  email: String;
  password: String;
  // repeatPassword: String
}



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', {email,password});
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

}
