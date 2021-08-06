import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
public messArray: any = [
  { user: "Ben", message: "hey", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "John", message: "hello", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "Na young", message: "Is This Working?", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "Ju Hyeon", message: "Hello?", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "Ben", message: "whats up", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "John", message: "how are you", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "Na young", message: "I hope so?", time: Date, url: "bcp\src\assets\logo.jpg"},
  { user: "Ju Hyeon", message: "Can you hear me?", time: Date, url: "bcp\src\assets\logo.jpg"},
]

public userArray: any =[
  {user: "Ben"},
  {user: "John"},
  {user: "Na Young"},
  {user: "Ju Hyeonn"}
]

constructor() { }
  
getUsers(){
  console.log("got users");
  return this.userArray;
}

 getMessages(){
  return this.messArray;
 }

}//end class
