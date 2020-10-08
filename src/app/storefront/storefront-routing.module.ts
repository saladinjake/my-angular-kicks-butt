import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WalletComponent } from './wallet/wallet.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ProductlistComponent }  from './productlist/productlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import  { StorefrontComponent } from './storefront.component';

import { AuthGuard } from '../user/services/middlewares/auth.middleware';

export const APP_ROUTES: Routes = [

  {
    path: 'storefront',
    component: StorefrontComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component:  ProductlistComponent},
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },

      { path: 'ratings', component: RatingsComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'wallet', component: WalletComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class StorefrontRoutingModule { }
