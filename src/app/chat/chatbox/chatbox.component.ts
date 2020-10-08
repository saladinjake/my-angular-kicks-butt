import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  title = 'Chat';
  message = '';
  chats = [];
  username;
    constructor(private messageService: MessageService) {
      this.messageService.getChats().subscribe((data) => {
        this.chats = data;
        window.setTimeout(() => {
          const elem = document.getElementById('scrolldiv');
          elem.scrollTop = elem.scrollHeight;
        }, 500);
      });
    }
    addChat() {
      if (this.message.length === 0) {
        return;
      }
      this.messageService.addChat(this.message);
      this.message = '';
    }

    addUser(user) {
      this.messageService.addUser(user);
      this.username = user;
    }
}
