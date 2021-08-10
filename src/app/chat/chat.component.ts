import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userName: string = "John";
  currentIsEdited: boolean = false;
  date = Date.now();
  chat_messages: Message[] = [];

  sendChat(chat: Message) {
    if(chat) {
      this.chat_messages.push(chat)
    }
  }
  
  getMessagesChat(): void {
  }


  ngOnInit(): void {
    this.getMessagesChat();
  }

}