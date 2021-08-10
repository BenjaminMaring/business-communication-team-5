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

  onDelete(index: number) {
    this.channel.messages.splice(index, 1);
    // this.channel.messages.splice(//arg1 - startingIndex, //arg2 - deleteCount);

      // for (let i=0; i!== this.channel.messages.length; i++){
      //   if (message === this.channel.messages[i]){
        // channelIndex = i;
      //   }//end if
      // }//end for
  }
}
