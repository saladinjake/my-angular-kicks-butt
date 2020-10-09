import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../../sharedlibs/auth.service';
// import { LoadingEffect } from './loading';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn : boolean = false;
  @Input() isAdmin : boolean  = false;

  @Input() user: User | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }


  ngOnInit(): void {
    // new LoadingEffect().attachEvents();
  }

}
