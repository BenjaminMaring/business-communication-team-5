import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Message } from "./message";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public messages = [
    {//new channel
      channelName : "Na-Young",
      description: "Chatting with Na-Young",
      messages : [
        { username: "NaYoung",
          avatarURL: "",
          chatMessage: "Hey! How are you??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
    {//new channel
      channelName : "Benjamin",
      description : "Chatting with Benjamin'",
      messages : [
        {username: "BenjaminMaring",
          avatarURL: "",
          chatMessage: "Hello, is this working??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
    {//new channel
      channelName : "JuHyeonBae",
      description: "Chatting with Ju-Hyeon",
      messages : [
        {
          username: "JuHyeonBae",
          avatarURL: "",
          chatMessage: "Hey do you know if this is working??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
  ];

constructor() { }

//code below is for getting the data to messages component
getUsers(){
  return this.messages;
}

getIndex(channelName: string){
  let channelIndex: number =0;
  for (let i=0; i!== this.messages.length; i++){
        if (channelName === this.messages[i].channelName){
        channelIndex = i;
        }//end if
     }//end for
     return channelIndex;
}

pushObj(message: string, time: number, index: number): void{
      let obj: Message = {
        username: "John", 
        avatarURL: "",
        chatMessage: message,
        timeStamp: time,
        edited: true,
      };
      
      this.messages[index].messages.push(obj);
}

}//end class
