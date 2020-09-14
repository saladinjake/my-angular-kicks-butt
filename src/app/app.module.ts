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
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './storefront/cart/cart.component';
import { CheckoutComponent } from './storefront/checkout/checkout.component';
import { ProductlistComponent } from './storefront/productlist/productlist.component';
import { RelatedComponent } from './storefront/related/related.component';
import { RatingsComponent } from './storefront/ratings/ratings.component';
import { ReviewsComponent } from './storefront/reviews/reviews.component';
import { WalletComponent } from './storefront/wallet/wallet.component';
import { ChatComponent } from './chat/chat.component';


const IMPORTED_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,

  UserModule,
  CoreModule,

];


@NgModule({
  declarations: [AppComponent, StorefrontComponent, CartComponent, CheckoutComponent, ProductlistComponent, RelatedComponent, RatingsComponent, ReviewsComponent, WalletComponent, ChatComponent
   ],
  imports: [...IMPORTED_MODULES],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
