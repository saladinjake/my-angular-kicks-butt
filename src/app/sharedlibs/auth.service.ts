import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Config, API_URL} from '../config/Config';



import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { User, AuthResponse } from './interface/index';

import { TokenStorage } from './token.store';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
    private user$ = new BehaviorSubject<User | null>(null);



  constructor(private _router: Router, private _http: HttpClient, _tokenStorage:TokenStorage) { }
  register(user) {
    return this._http.post( `${API_URL}/signup`, user);
    // localStorage.setItem('user', user);
  }
  login(user) {
    return this._http.post( `${API_URL}/signin`, user);
  }


  logout() {
    localStorage.clear();
    this._router.navigate(['/signin']);
  }
  isAuthenticated() {
    return localStorage.getItem('user');
  }




  //login through observables
  loginThrough(email: string, password: string): Observable<User> {
    return this._http
      .post<AuthResponse>(`${API_URL}/signin`, { email, password })
      .pipe(
        tap(({ token, user }) => {
          this.setUser(user);
          this._tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }


  setUser(user: User | null): void {
    if (user) {
      user.isAdmin = user.roles.includes('admin');
    }
    this.user$.next(user);
    window.user = user;
  }




  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  signOut(): void {
    this._tokenStorage.signOut();
    this.setUser(null);
    delete window.user;
  }


  getAuthorizationHeaders() {
    const token: string | null = this._tokenStorage.getToken() || '';
    return { Authorization: `Bearer ${token}` };
  }



  tokenStillValid(): Observable<User> {
    const token: string | null = this.tokenStorage.getToken();

    if (token === null) {
      return EMPTY;
    }

    return this._http.get<AuthResponse>(`${API_URL}/api/auth/token-matches-user`).pipe(
      tap(({ user }) => this.setUser(user)),
      pluck('user')
    );
  }


  isUserStillLoggedIn(): Promise<User> {
     return this.tokenStillValid().toPromise();
  }


 //register through observeables
  registerThrough(
    firstname: string,
    lastname: string,
    othername: string,
    user_type: string,
    phoneNumber: string,
    email: string,
    password: string,
    repeatPassword: string
  ): Observable<User> {
    return this._http
      .post<AuthResponse>(`${API_URL}/api/auth/register`, {
        firstname,
        lastname,
        othername,
        user_type,
        phoneNumber,
        email,
        password,
        repeatPassword
      })
      .pipe(
        tap(({ token, user }) => {
          this.setUser(user);
          this._tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }

}
