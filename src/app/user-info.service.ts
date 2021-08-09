import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {


  public messages = [
    {//new channel
      channelName : "Na-Young",
      description: "Chatting with Na-Young",
      messages : [
        { username: "Na-Young",
          avatarURL: "",
          chatMessage: "Hey! How are you??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
    {//new channel
      channelName : "Benjamin",
      description : "Chatting with Benjamin'",
      messages : [
        {username: "Benjamin Maring",
          avatarURL: "",
          chatMessage: "Hello, is this working??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
    {//new channel
      channelName : "Ju-Hyeon Bae",
      description: "Chatting with Ju-Hyeon",
      messages : [
        {
          username: "Ju Hyeon Bae",
          avatarURL: "",
          chatMessage: "Hey do you know if this is working??",
          timeStamp: "2021-08-09 01:11:00",
          edited: true}]},
  ];







// public dataArray: any[]=[
//   {channel: "Ben", messages: ["Hello", "Is this working?"], time: [], url: "bcp\src\assets\logo.jpg"},
//   {channel: "John", messages: ["Hey", "I hope this works"], time: [], url: "bcp\src\assets\logo.jpg"},
//   {channel: "Na Young", messages: ["Hey you", "This better be working"], time: [], url: "bcp\src\assets\logo.jpg"},
//   {channel: "Ju Hyeon", messages: ["Whats up?", "Does it work?"], time: [], url: "bcp\src\assets\logo.jpg"},
// ]

constructor() { }

//code below is for getting the data to messages component
getUsers(){
  return this.messages;
}

}//end class
