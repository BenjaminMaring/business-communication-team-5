import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
public messArray: any = [
  { user: "Ben", message: "hey", time: Date},
  { user: "John", message: "hello", time: Date},
  { user: "Na young", message: "Is This Working?", time: Date},
  { user: "Ju Hyeon", message: "I think so?", time: Date},
]

public userArray: any =[
  {user: "Ben"},
  {user: "John"},
  {user: "Na Young"},
  {user: "Ju Hyeonn"}
]

  constructor() { }
  
getEverything(){
  return this.userArray;
  console.log("gotEverything");
}

}//end class
