
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { AdminRoutingModule } from './admin-routing.module';

import { DashboardcontrollerComponent } from './dashboardcontroller/dashboardcontroller.component';
import { AccountmanagercontrollerComponent } from './accountmanagercontroller/accountmanagercontroller.component';
import { BlogmanagercontrollerComponent } from './blogmanagercontroller/blogmanagercontroller.component';
import { FilesmanagercontrollerComponent } from './filesmanagercontroller/filesmanagercontroller.component';
import { ForextrademanagermanagercontrollerComponent } from './forextrademanagermanagercontroller/forextrademanagermanagercontroller.component';
import { ForummanagercontrollerComponent } from './forummanagercontroller/forummanagercontroller.component';
import { PagemanagercontrollerComponent } from './pagemanagercontroller/pagemanagercontroller.component';

import { PaymentgatewaycontrollerComponent } from './paymentgatewaymanagercontroller/paymentgatewaymanagercontroller.component';
import { SettingsmanagercontrollerComponent } from './settingsmanagercontroller/settingsmanagercontroller.component';
import { SlidermanagercontrollerComponent } from './slidermanagercontroller/slidermanagercontroller.component';

import { UsermanagercontrollerComponent } from './usermanagercontroller/usermanagercontroller.component';
import { UserpackagemanagercontrollerComponent } from './userpackagemanagercontroller/usersettingsmanagercontroller.component';
import { UsertransactionmanagercontrollerComponent } from './usertransactionmanagercontroller/usertransactionmanagercontroller.component';
import { UserwalletmanagercontrollerComponent } from './userwalletmanagercontroller/userwalletmanagercontroller.component';


import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    DashboardcontrollerComponent,
    AccountmanagercontrollerComponent,
    BlogmanagercontrollerComponent,
    FilesmanagercontrollerComponent,
    ForextrademanagermanagercontrollerComponent,
    ForummanagercontrollerComponent,
    PagemanagercontrollerComponent,
    PaymentgatewaycontrollerComponent,
    SettingsmanagercontrollerComponent,
    SlidermanagercontrollerComponent,
    UsermanagercontrollerComponent,
    UserpackagemanagercontrollerComponent,
    UsertransactionmanagercontrollerComponent,
    UserwalletmanagercontrollerComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
