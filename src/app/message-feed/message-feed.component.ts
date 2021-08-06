import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit {

  constructor(private userInfoService: UserInfoService) { }

  messages: any[]=[];

  url= "./assets/logo.jpg";

  ngOnInit(): void {
      this.getMessages();
  }

   getMessages(): void{
     this.messages = this.userInfoService.getMessages();
   }

}
