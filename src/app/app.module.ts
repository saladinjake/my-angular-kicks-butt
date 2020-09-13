import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//import custom modules
import { UserModule } from './user/user.module'
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';


const IMPORTED_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,

  UserModule,
  CoreModule,

];


@NgModule({
  declarations: [AppComponent
   ],
  imports: [...IMPORTED_MODULES],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
