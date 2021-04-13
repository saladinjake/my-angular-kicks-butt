
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { AdminRoutingModule } from './admin-routing.module';

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

@NgModule({
  declarations: [
    DashboardcontrollerComponent,
    AccountmanagercontrollerComponent,
    BlogmanagercontrollerComponent,
    FilesmanagermanagercontrollerComponent,
    ForextrademanagercontrollerComponent,
    ForummanagercontrollerComponent,
    PagemanagercontrollerComponent,
    PaymentgatewaymanagercontrollerComponent,
    SettingsmanagercontrollerComponent,
    SlidermanagercontrollerComponent,
     UsermanagermanagercontrollerComponent,
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
