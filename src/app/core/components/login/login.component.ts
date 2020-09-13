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
    password: '',
    firstname:'',
    lastname:'',
    phoneNumber:'',
    username:'',
    user_type:''
  };
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login(theUser: User) {
    //old
    // this.authService.login(theUser);
    // this._router.navigate(['/dashboard']);
    this.authService.login(theUser).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
