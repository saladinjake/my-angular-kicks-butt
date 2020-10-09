import { Component, OnInit } from '@angular/core';




import { User } from '../../models/user.model';
import { AuthService } from '../../../sharedlibs/auth.service';
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
    user_type:'',
    othernames:'',
    passwordRepeat:''
  };


  //or This
  email: string | null = null;
  password: string | null = null;


  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login() {

    this.user.email = this.email;
    this.user.password = this.password;
    this.authService.login(this.user).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
      this._router.navigate(['/dashboard']);


    });


  }

  loginThrough(): void {
    this.authService.loginThrough(this.email!, this.password!).subscribe(() => {
      this._router.navigateByUrl('/');
    });
  }
}
