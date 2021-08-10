import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MessagesComponent,
    LoginFormComponent,
    MessageFeedComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
