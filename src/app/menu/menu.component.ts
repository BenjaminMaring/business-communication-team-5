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

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    console.log("getUsers called");
    const placeH = this.userInfoService.getEverything();
    this.menu = placeH;
    console.log(this.menu);
  }



}
