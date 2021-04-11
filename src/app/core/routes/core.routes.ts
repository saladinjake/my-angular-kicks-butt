import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { LoginComponent } from '../components/login/login.component';
import { AboutComponent } from '../components/about/about.component';
import { RegisterComponent } from '../components/register/register.component';
import { ForgetpasswordComponent } from '../components/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from '../components/changepassword/changepassword.component';
import { IdlestateComponent } from '../components/idlestate/idlestate.component';
import { CoreComponent } from '../core.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoadingComponent } from '../components/loading/loading.component';

import { EndusercontrollerComponent } from '../components/endusercontroller/endusercontroller.component';
import { TermscontrollerComponent } from '../components/termscontroller/termscontroller.component';
import { TradeproductcontrollerComponent } from '../components/tradeproductcontroller/tradeproductcontroller.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component'

// import { SigninComponent } from '../components/signin/signin.component';
// import { SignupComponent } from '../components/signup/signup.component';
// import { UserProfileComponent } from '../components/user-profile/user-profile.component';


export const APP_ROUTES : Routes = [


        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: 'welcome',  component: LandingpageComponent },
        { path: 'about',  component: AboutComponent },
      { path: 'signin', component: LoginComponent},
      { path: 'signup', component: RegisterComponent},
       { path: 'profile', component: UserProfileComponent },
       // { path: 'register', component: SignupComponent },
      { path: 'passwordreset', component: ForgetpasswordComponent},
      { path: 'passwordedit', component: ChangepasswordComponent},
      { path: 'end-user/aggrement', component: IdlestateComponent},
      { path: 'tradeproduct', component: TradeproductcontrollerComponent},
      { path: 'policy', component: EndusercontrollerComponent},
      { path: 'implied/terms', component: TermscontrollerComponent},
    //  { path: '**', component: PageNotFoundComponent}

];
