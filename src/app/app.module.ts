import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    MessagesComponent,
    LoginFormComponent,
    AfterLoginComponent,
    MessageFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
