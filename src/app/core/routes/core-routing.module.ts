import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ForgetpasswordComponent } from '../components/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from '../components/changepassword/changepassword.component';
import { IdlestateComponent } from '../components/idlestate/idlestate.component';
import { CoreComponent } from '../core.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoadingComponent } from '../loading/loading.component';

export const coreRoutes: Routes = [

      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: LoginComponent},
      { path: 'signup', component: RegisterComponent},
      { path: 'passwordreset', component: ForgetpasswordComponent},
      { path: 'passwordedit', component: ChangepasswordComponent},
      { path: 'locked', component: IdlestateComponent},
      { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
