import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url="./assets/background-remove-logo.png"

  signOut(){
    
  }

}


