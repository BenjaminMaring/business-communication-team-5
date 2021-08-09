import { Component, OnInit } from '@angular/core';
import { MessageFeedComponent } from '../message-feed/message-feed.component';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  sending: string="";

  message: any={
    user: "tempName", message: this.sending, time: Date.now(), url: "bcp\src\assets\logo.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }


}
