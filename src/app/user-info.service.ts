import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

public dataArray: any[]=[
  {channel: "Ben", messages: ["Hello", "Is this working?"], time: [], url: "bcp\src\assets\logo.jpg"},
  {channel: "John", messages: ["Hey", "I hope this works"], time: [], url: "bcp\src\assets\logo.jpg"},
  {channel: "Na Young", messages: ["Hey you", "This better be working"], time: [], url: "bcp\src\assets\logo.jpg"},
  {channel: "Ju Hyeon", messages: ["Whats up?", "Does it work?"], time: [], url: "bcp\src\assets\logo.jpg"},
]

  


constructor() { }
//code below is for getting the data to messages component
getUsers(){
  return this.dataArray;
}

}//end class
