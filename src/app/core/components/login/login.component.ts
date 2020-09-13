import { Component, OnInit } from '@angular/core';




import { User } from '../../models/user.model';
import { AuthService } from '../../../user/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login(theUser: User) {
    this.authService.login(theUser);
    this._router.navigate(['/dashboard']);
  }
}
