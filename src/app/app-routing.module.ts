import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';



const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'home', component: ChatBotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
