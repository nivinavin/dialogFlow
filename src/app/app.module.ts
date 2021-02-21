import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyATfqPMd9dfU265jzR7uGadoDVDWzNdZ-M",
  authDomain: "db-agent-alos.firebaseapp.com",
  databaseURL: "https://db-agent-alos.firebaseio.com",
  projectId: "db-agent-alos",
  storageBucket: "db-agent-alos.appspot.com",
  messagingSenderId: "744957673106",
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChatModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
