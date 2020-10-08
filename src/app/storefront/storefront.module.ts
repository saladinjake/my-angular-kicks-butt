
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { SingleproductComponent } from './productlist/singleproduct/singleproduct.component';


import { WalletComponent } from './wallet/wallet.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ProductlistComponent }  from './productlist/productlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import  { StorefrontComponent } from './storefront.component';


@NgModule({
  declarations: [
    SingleproductComponent,
    WalletComponent,
    ReviewsComponent,
    RatingsComponent,
    ProductlistComponent,
    CheckoutComponent,
    CartComponent,
    StorefrontComponent

  ],
  imports: [
    CommonModule,
    StorefrontRoutingModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StorefrontModule { }
