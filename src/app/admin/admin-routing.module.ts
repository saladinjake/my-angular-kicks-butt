import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardcontrollerComponent } from './components/dashboardcontroller/dashboardcontroller.component';
import { AccountmanagercontrollerComponent } from './components/accountmanagercontroller/accountmanagercontroller.component';
import { BlogmanagercontrollerComponent } from './components/blogmanagercontroller/blogmanagercontroller.component';
import { FilesmanagermanagercontrollerComponent } from './components/filesmanagermanagercontroller/filesmanagermanagercontroller.component';
import { ForextrademanagercontrollerComponent } from './components/forextrademanagercontroller/forextrademanagercontroller.component';
import { ForummanagercontrollerComponent } from './components/forummanagercontroller/forummanagercontroller.component';
import { PagemanagercontrollerComponent } from './components/pagemanagercontroller/pagemanagercontroller.component';

import { PaymentgatewaymanagercontrollerComponent } from './components/paymentgatewaymanagercontroller/paymentgatewaymanagercontroller.component';
import { SettingsmanagercontrollerComponent } from './components/settingsmanagercontroller/settingsmanagercontroller.component';
import { SlidermanagercontrollerComponent } from './components/slidermanagercontroller/slidermanagercontroller.component';

import { UsermanagermanagercontrollerComponent } from './components/usermanagermanagercontroller/usermanagermanagercontroller.component';
import { UserpackagemanagercontrollerComponent } from './components/userpackagemanagercontroller/userpackagemanagercontroller.component';
import { UsertransactionmanagercontrollerComponent } from './components/usertransactionmanagercontroller/usertransactionmanagercontroller.component';
import { UserwalletmanagercontrollerComponent } from './components/userwalletmanagercontroller/userwalletmanagercontroller.component';



import { AdminComponent } from './admin.component';



// import { AuthGuard } from './services/middlewares/auth.middleware';

export const APP_ROUTES: Routes = [
  {
    path: 'admination',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardcontrollerComponent},
      { path: 'profile', component: AccountmanagercontrollerComponent},
      { path: 'blog', component: BlogmanagercontrollerComponent},
      { path: 'files/histories', component: FilesmanagermanagercontrollerComponent},
      { path: 'forums/histories', component: ForummanagercontrollerComponent},
      { path: 'advanced/transaction/histories', component:  PagemanagercontrollerComponent},
      { path: 'settings/payment-gateway', component: PaymentgatewaymanagercontrollerComponent},
      { path: 'settings/application', component: SettingsmanagercontrollerComponent},
      { path: 'settings/banners', component:  SlidermanagercontrollerComponent},
      { path: 'settings/users/history', component:  UsermanagermanagercontrollerComponent},
      { path: 'settings/package/history', component: UserpackagemanagercontrollerComponent},
      { path: 'settings/transactions/history', component: UsertransactionmanagercontrollerComponent},
      { path: 'settings/wallet/history', component: UserwalletmanagercontrollerComponent},

    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
