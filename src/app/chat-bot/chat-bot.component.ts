import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  userName: string;

  constructor(public authService: AuthService, public route:Router) { }

  ngOnInit(): void {

    if(!this.authService.isLoggedIn) {
      this.route.navigate(['login']);
    } else {
      const user =JSON.parse(localStorage.getItem('user'));
      this.userName = user.email;
      console.log(this.userName);
    }

  }

  logout() {
    this.authService.logout();
    this.route.navigate(['login']);
  }

}
