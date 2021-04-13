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
      { path: 'basic/histories', component: GalleriesComponent},
      { path: 'basic/package/histories', component: CartComponent},
      { path: 'advanced/transaction/histories', component: TransactionsComponent},
      { path: 'account/edit/:id', component: EditComponent},
      { path: 'learn/trading/videos', component: VideosComponent},

    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
