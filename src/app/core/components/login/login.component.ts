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
    user_type:''
  };

  //or This
  email: string | null = null;
  password: string | null = null;


  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login(theUser: User) {


    this.authService.login(theUser).subscribe(data => {
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
