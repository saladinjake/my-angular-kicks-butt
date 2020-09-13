import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { VideosComponent } from './videos/videos.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './account/edit/edit.component';
import { UserComponent } from './user.component';


import { AuthGuard } from './services/middlewares/auth.middleware';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: UserComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'account', component: AccountComponent},
      { path: 'galleries', component: GalleriesComponent},
      { path: 'videos', component: VideosComponent},
      { path: 'transaction', component: TransactionsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'account/edit/:id', component: EditComponent},
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
