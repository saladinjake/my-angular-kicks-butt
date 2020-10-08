
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ChatComponent } from './chat.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatexpandedComponent } from './chatexpanded/chatexpanded.component';

import { AuthGuard } from '../user/services/middlewares/auth.middleware';


export const APP_ROUTES: Routes = [

  {
    path: 'chat',
    component: ChatComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'chatbov', pathMatch: 'full' },
      { path: 'chatexpanded', component:  ChatexpandedComponent },
      { path: 'chatbox', component: ChatboxComponent },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
