
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//import modules
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatexpandedComponent } from './chatexpanded/chatexpanded.component';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatboxComponent, ChatexpandedComponent,ChatComponent ],
  imports: [
    CommonModule,
    ChatRoutingModule,

    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule { }
