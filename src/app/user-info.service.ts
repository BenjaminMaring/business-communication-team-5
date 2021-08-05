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
  { user: "Ju Hyeon", message: "I think so?", time: Date}
]


  constructor() { }

// obtaintUsers(){
//     let users: any = [];
//     for(let i = 0; i !== messArray.length; i++){
//       for(let x=0; x !== users.length;x++){
//         if (messArray[i].user !== users[x]){
//           users.push(messArray[i].user);
//         }//end if
//       }//end nested
//     }//end outer
//     return users;
//     console.log("returned easyArray");
//   }

getEverything(){
  return this.messArray;
  console.log("gotEverything");
}

}//end class
