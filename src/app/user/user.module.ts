
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { UserRoutingModule } from './user-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { VideosComponent } from './videos/videos.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './account/edit/edit.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AccountComponent,
    GalleriesComponent,
    VideosComponent,
    TransactionsComponent,
    CartComponent,
    EditComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
