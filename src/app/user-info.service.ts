import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  

  constructor() { }

  getUsers(){
    const easyArray = [""];
    for(let i = 0; i!== messArray.length; i++){
      for(let x=0;x!==easyArray.length;x++){
        if (messArray[i].user == easyArray[x]){
          easyArray.push(messArray[i].user)
        }//end if
      }//end nested
    }//end outer
    return easyArray;
  }

}//end class



let messArray = [
  { user: "Ben", message: "hey", time: Date},
  { user: "John", message: "hello", time: Date},
  { user: "Na young", message: "Is This Working?", time: Date},
  { user: "Ju Hyeon", message: "Is This Working?", time: Date}
]