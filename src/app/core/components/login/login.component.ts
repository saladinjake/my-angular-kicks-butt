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
  // email: string | null = null;
  // password: string | null = null;


  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login(theUser: User) {
    //old
    // this.authService.login(theUser);
    // this._router.navigate(['/dashboard']);

    //or login through
    // this.authService.loginThrough(this.email!, this.password!).subscribe(() => {
      // this.router.navigateByUrl('/');
    // });

    this.authService.login(theUser).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
      localStorage.setItem('user', JSON.stringify(data));
    });

    //or This
    // this._router.navigateByUrl('/');
  }
}
