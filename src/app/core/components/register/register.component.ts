import { Component, OnInit } from '@angular/core';


import { User } from '../../models/user.model';
import { AuthService } from '../../../user/services/auth.service';
import { Router } from '@angular/router';

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
    user_type:''
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
