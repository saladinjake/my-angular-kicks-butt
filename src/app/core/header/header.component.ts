import { Component, OnInit } from '@angular/core';

// import { IReporterWebsiteLoadingEffect } from './loading';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn : boolean = false;
  public isAdmin : boolean  = false;
  constructor() {
   }

  ngOnInit(): void {
    // new IReporterWebsiteLoadingEffect().attachEvents();
  }

}
