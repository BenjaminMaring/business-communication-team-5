import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [ 
  {path: 'messages', component: MessagesComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
