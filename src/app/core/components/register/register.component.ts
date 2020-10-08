import { Component, OnInit } from '@angular/core';


import { User } from '../../models/user.model';
import { AuthService } from '../../../sharedlibs/auth.service';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    firstname:'',
    lastname:'',
    phoneNumber:'',
    username:'',
    user_type:'',
    othername:''
  };



  constructor(private authService: AuthService, private _router: Router) {}
  ngOnInit(): void {}

  passwordsMatchValidator(control: FormControl): ValidationErrors | null {
    const password = control.root.get('password');
    return password && control.value !== password.value
      ? {
          passwordMatch: true,
        }
      : null;
  }

  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    othernames: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    user_type: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator]),
  });


  get fullname(): AbstractControl {
    return this.userForm.get('fullname')!;
  }

  get email(): AbstractControl {
    return this.userForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.userForm.get('password')!;
  }

  get repeatPassword(): AbstractControl {
    return this.userForm.get('repeatPassword')!;
  }


  register(theUser: User) {
      this.authService.register(theUser);
      this._router.navigate(['']);
  }


  registerThrough(): void {
      if (this.userForm.invalid) {
        return;
      }

      const { firstname,lastname,othername, user_type, phoneNumber, email, password, repeatPassword } = this.userForm.getRawValue();

      this.authService.register(firstname,lastname,othername, user_type, phoneNumber, email, password, repeatPassword).subscribe(data => {
        this._router.navigate(['']);
      });
  }



}
