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

import  { SignUpCheker }  from '../../js/SignUpCheker';

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
    othernames:'',
    passwordRepeat:''
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


  get firstname(): AbstractControl {
    return this.userForm.get('firstname')!;
  }

  get lastname(): AbstractControl {
    return this.userForm.get('lastname')!;
  }

  get othernames(): AbstractControl {
    return this.userForm.get('othernames')!;
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

  get phoneNumber():AbstractControl {
    return this.userForm.get('phoneNumber')!;
  }




  get username():AbstractControl {
    return this.userForm.get('username')!;
  }


  get userType():AbstractControl {
    return this.userForm.get('user_type')!;
  }
  //method 1 to register with reative form and custom validation
  register() {

         const {
           firstname,lastname,othername,
           user_type, phoneNumber, email,
           password,username, repeatPassword
         } = this.userForm.getRawValue();

     this.user.firstname = firstname;
     this.user.lastname = lastname;
     this.user.email = email;
     this.user.username = username;
     this.user.othernames = othernames;
     this.user.password = password;
     this.user.passwordRepeat = repeatPassword;
     this.user.user_type = user_type;
     this.user.phoneNumber = phoneNumber;



     //do my own validation here before submitting
     const resultingData = SignUpCheker.triggerValidation({...this.user});
     if(resultingData){
       this.authService.register(this.user).subscribe( (data) =>{
          this._router.navigate(['']);
       });
     }

  }

 //mth 2
  registerThrough(): void {
      if (this.userForm.invalid) {
        return;
      }

      const {
        firstname,lastname,othername,
        user_type, phoneNumber, email,
        password,username, repeatPassword
      } = this.userForm.getRawValue();

      this.authService.registerThrough(
        firstname,lastname,othername,
        user_type,phoneNumber,email,
        password,username,repeatPassword
      ).subscribe(data => {
        this._router.navigate(['']);
      });
  }



}
