import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatexpandedComponent } from './chatexpanded/chatexpanded.component';


@NgModule({
  declarations: [ChatboxComponent, ChatexpandedComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
