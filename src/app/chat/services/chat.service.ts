import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { filter, scan, tap } from 'rxjs/operators';
import { io, Socket } from 'socket.io-client';

import { Command } from '../models/command';
import { ChatEvent, ChatEventType } from '../models/events';
import { Message } from '../models/message';

import { environment } from './../../../environments/environment';
import { LoggedUser } from './../../login/models/logged-user';
import { AuthService } from './../../login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private user: LoggedUser;
  private socket: Socket;
  private newEvent$ = new ReplaySubject<ChatEvent<Command | Message>>();
  private isSocketConnected$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {
    this.watchUser();
  }

  connect(): void {
    this.socket = io(environment.socketUrl);
    this.isSocketConnected$.next(true);
  }

  disconnect(): void {
    this.socket.disconnect();
    this.isSocketConnected$.next(false);
    this.newEvent$ = new ReplaySubject<ChatEvent<Command | Message>>();
  }

  dispatchMessage(message: string): void {
    const messageObj = {
      author: this.user.nickname,
      message,
    };
    this.newEvent$.next({
      payload: {
        ...messageObj,
        createdByLoggedUser: true,
      },
      type: ChatEventType.MESSAGE,
    });
    this.socket.emit(ChatEventType.MESSAGE, messageObj);
  }

  dispatchCommand(): void {
    this.socket.emit(ChatEventType.COMMAND);
  }

  watch(): void {
    this.watchMessages();
    this.watchCommands();
  }

  get messages$(): Observable<Array<ChatEvent<Message | Command>>> {
    return this.newEvent$.asObservable().pipe(
      tap((d) => console.log(d)),
      scan((currentEvents, newEvent) => [...currentEvents, newEvent], []),
    );
  }

  get isConnected$() {
    return this.isSocketConnected$.asObservable();
  }

  private watchMessages(): void {
    this.socket.on(ChatEventType.MESSAGE, (event: Message) =>
      this.newEvent$.next({
        payload: { ...event },
        type: ChatEventType.MESSAGE,
      }),
    );
  }

  private watchCommands(): void {
    this.socket.on(ChatEventType.COMMAND, (event: Command) =>
      this.newEvent$.next({
        payload: { ...event },
        type: ChatEventType.COMMAND,
      }),
    );
  }

  private watchUser(): void {
    this.authService.loggedUser
      .pipe(filter((user) => !!user))
      .subscribe((user) => (this.user = user));
  }
}
