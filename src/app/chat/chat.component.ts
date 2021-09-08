import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

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
  @ViewChild('messagesContainer') chatContainer: ElementRef<HTMLElement>;
  private scrollSubscription: Subscription;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar,
  ) {
    this.eventList$ = this.chatService.messages$;
    this.isConnected$ = this.chatService.isConnected$;
  }

  send(): void {
    if (!this.message) {
      this.snackbar.open('Please type a message', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }
    this.chatService.dispatchMessage(this.message);
    this.message = '';
  }

  onAskForCommand(): void {
    this.chatService.dispatchCommand();
  }

  onUserAnswer(answer: string): void {
    this.chatService.dispatchMessage(answer);
  }

  logout(): void {
    this.authService.logout();
    this.chatService.disconnect();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.chatService.connect();
    this.chatService.watch();
    this.watchScroll();
  }

  ngOnDestroy(): void {
    this.chatService.disconnect();
    this.scrollSubscription.unsubscribe();
  }

  private watchScroll(): void {
    this.scrollSubscription = this.eventList$.subscribe(() => {
      setTimeout(() => {
        const element = this.chatContainer.nativeElement;
        element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
      }, 150);
    });
  }
}
