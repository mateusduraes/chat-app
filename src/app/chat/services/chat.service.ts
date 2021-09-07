import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { filter, scan } from 'rxjs/operators';
import { io, Socket } from 'socket.io-client';

import { environment } from './../../../environments/environment';
import { LoggedUser } from './../../login/models/logged-user';
import { AuthService } from './../../login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private user: LoggedUser;
  private socket: Socket;
  private newEvent$ = new ReplaySubject<any>();
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
  }

  dispatchMessage(message: string): void {
    // TODO: Add type ENUM
    this.socket.emit('message', {
      author: this.user.nickname,
      message,
    });
  }

  // TODO: Add dynamic type based on type payload
  disapatchCommand(command: string, data: any): void {
    // TODO: Add type ENUM
    this.socket.emit('command', {
      author: this.user.nickname,
      command: {
        type: command,
        data,
      },
    });
  }

  watch(): void {
    this.watchMessages();
    this.watchCommands();
  }

  get messages$() {
    return this.newEvent$
      .asObservable()
      .pipe(
        scan((currentEvents, newEvent) => [...currentEvents, newEvent], []),
      );
  }

  get isConnected$() {
    return this.isSocketConnected$.asObservable();
  }

  private watchMessages(): void {
    this.socket.on('message', (event: any) => {
      this.newEvent$.next(event);
    });
  }

  private watchCommands(): void {
    this.socket.on('command', (event: any) => {
      this.newEvent$.next(event);
    });
  }

  private watchUser(): void {
    this.authService.loggedUser
      .pipe(filter((user) => !!user))
      .subscribe((user) => (this.user = user));
  }
}
