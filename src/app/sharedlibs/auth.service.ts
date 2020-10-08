import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Config, API_URL} from '../config/Config';

@Injectable({
  providedIn: 'root'
})
//old
// export class AuthService {
//
//   constructor(private _router: Router) { }
//   login(user) {
//     localStorage.setItem('user', user);
//   }
//   logout() {
//     localStorage.clear();
//     this._router.navigate(['/login']);
//   }
//   isAuthenticated() {
//     return localStorage.getItem('user');
//   }
//
//   register(){}
// }



export class AuthService {

  constructor(private _router: Router, private _http: HttpClient) { }
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
}
