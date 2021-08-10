import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';


@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit {


  @Input() channel: any ={};

  
  constructor() { }

  url= "./assets/logo.jpg";

  ngOnInit(): void {
     
  }  

  onDelete(chan: any){
      for (let i=0; i!== this.channel.messages.length(); i++){
        if (chan === this.channel.messages[i]){
          this.channel.messages[i].splice();
        }//end if
      }//end for
  }
}
