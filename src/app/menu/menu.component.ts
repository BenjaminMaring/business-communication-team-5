import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menu: any[] = [];

  selectedUser: string="";

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    console.log("getUsers called");
    const placeH = this.userInfoService.getUsers();
    this.menu = placeH;
  }

  sendUser(user: string): void{
    this.selectedUser=user;
    console.log(this.selectedUser);
  }

  swapButtons(): void{
    
  }

}
