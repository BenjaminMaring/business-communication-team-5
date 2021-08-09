import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  menu: any[] = [];

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    console.log("getUsers called");
    const placeH = this.userInfoService.getUsers();
    this.menu = placeH;
  }  

}
