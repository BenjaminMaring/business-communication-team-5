import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  menu: any[] = [];

  channel: any= {channel: "Ben", messages: ["Hello", "Is this working?"], time: [], url: "bcp\src\assets\logo.jpg"};

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    console.log("getUsers called");
    this.menu = this.userInfoService.getUsers();
    console.log(this.menu);
  }  

  getChannel(data: string): void{
    this.channel=data;
    console.log(this.channel.channel + " hi");
  }

}
