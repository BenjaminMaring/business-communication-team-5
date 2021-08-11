import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  menu: any[] = [];

  default: any={//new channel
    channelName : "Na-Young",
    description: "Chatting with Na-Young",
    messages : [
      { username: "Welcome",
        avatarURL: "",
        chatMessage: "Select A User To Get Started.",
        timeStamp: "",
        edited: true}]};

  channel: any= {};

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getMessagesChat();
    this.getChannel(this.default);
  }

  getUsers(): void{
    console.log("getUsers called");
    this.menu = this.userInfoService.getUsers();
    console.log(this.menu);
  }  

  getChannel(data: any): void{
    this.channel=data;
    console.log(this.channel.channelName + " button is working");
  }

  userName: string = "John";
  currentIsEdited: boolean = false;
  date = Date.now();
  chat_messages: Message[] = [];

  sendChat(chat: string) {
      let i= this.userInfoService.getIndex(this.channel.channelName);
      let tempDate = Date.now();
      this.userInfoService.pushObj(chat, tempDate, i);
      this.getUsers();
  }
  
  getMessagesChat(): void {
  }


  
}


  
