import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
// import { AuthService } from '../../../sharedlibs/auth.service';
import { Router } from '@angular/router';

import  { HelpWithLogin }  from '../../js/loginChecker';


import { AuthService } from '../../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../../shared/token.service';
import { AuthStateService } from '../../../shared/auth-state.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;

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
  errorBag = [];

  constructor(
    public _router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,


  ) {

  }

  ngOnInit() {
  }
  login() {
    // this.user.email = this.email;
    // this.user.password = this.password;
    //
    // //perform login vaildation
    // const validationRequest = HelpWithLogin.triggerValidation({
    //   ...this.user
    // })
    //
    // if(validationRequest){
    //   this.authService.login(this.user).subscribe(data => {
    //     localStorage.setItem('user', JSON.stringify(data));
    //     this._router.navigate(['/dashboard']);
    //   });
    // }


    // console.log(this.user)
  }

  loginThroughObservable(): void {
    this.user.email = this.email;
    this.user.password = this.password;
    // this.authService.loginThrough(this.email!, this.password!).subscribe(() => {
    //   this._router.navigateByUrl('/');
    // });
    // // console.log(this.email!, this.password!)
    console.log(this.email!, this.password!, 'here');

    this.authService.signin(this.email!, this.password!).subscribe(
        result => {

          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
        },() => {
          this.authState.setAuthState(true);
          // this.loginForm.reset()
          this._router.navigate(['profile']);
        }
      );
  }

  loginAction(methd:string){
    const meth = methd;
    meth == 'basic'? this.login(): this.loginThroughObservable();
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }
}
