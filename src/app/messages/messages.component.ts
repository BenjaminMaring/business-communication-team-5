import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  menu: any[] = [];

  channel: any= {//new channel
    channelName : "Na-Young",
    description: "Chatting with Na-Young",
    messages : [
      { username: "Na-Young",
        avatarURL: "",
        chatMessage: "Hey! How are you??",
        timeStamp: "2021-08-09 01:11:00",
        edited: true}]};

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUsers();
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

}
