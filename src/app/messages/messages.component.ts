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

  channel: any= {
    channelName : "Na-Young",
    description: "Chatting with Na-Young",
    messages : [
      { username: "NaYoung",
        avatarURL: "",
        chatMessage: "Hey! How are you??",
        timeStamp: "2021-08-09 01:11:00",
        edited: true}]};

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getMessagesChat();
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

    // Step 1: Get the index of the channel you're currently displaying
    // Step 2: Create a method on the UserInfoService that pushes a message object to the channel index
    //         pushMessage(channelIndex: number, newMessage: Message) {
    //           this.messages[channelIndex].messages.push(newMessage);
    //         }
    // Step 3: Refresh your channel data within this component, now that the service has the new data

    // if(chat) {
    //   this.chat_messages.push(chat)
    // }
  }
  
  getMessagesChat(): void {
  }


  
}


  
