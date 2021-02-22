import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


//import modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//import custom modules
import { UserModule } from './user/user.module'
import { CoreModule } from './core/core.module';
import { ChatModule } from './chat/chat.module';
import { StorefrontModule } from './storefront/storefront.module';

//Admin module




import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/auth.interceptor';



const IMPORTED_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  UserModule,
  CoreModule,
  ChatModule,
  StorefrontModule

];


@NgModule({
  declarations: [AppComponent,
   ],
  imports: [...IMPORTED_MODULES],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
