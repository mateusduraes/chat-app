import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/services/auth.service';
import { Command } from './models/command';
import { ChatEvent } from './models/events';
import { Message } from './models/message';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  eventList$: Observable<Array<ChatEvent<Message | Command>>>;
  isConnected$: Observable<boolean>;
  message: string;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.eventList$ = this.chatService.messages$;
    this.isConnected$ = this.chatService.isConnected$;
  }

  send(): void {
    this.chatService.dispatchMessage(this.message);
  }

  askForCommand(): void {
    this.chatService.disapatchCommand('rate', {});
  }

  logout(): void {
    this.authService.logout();
    this.chatService.disconnect();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.chatService.connect();
    this.chatService.watch();
  }

  ngOnDestroy(): void {
    this.chatService.disconnect();
  }
}
