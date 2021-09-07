import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LoggedUser } from '../models/logged-user';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'ottonova-chat-app-user';
  private loggedUser$ = new BehaviorSubject<LoggedUser | null>(null);

  constructor() {
    this.getUserFromLocalStorage();
  }

  login(credentials: LoginCredentials): void {
    const loggedUser: LoggedUser = this.mapLoggedUser(credentials);
    this.loggedUser$.next(loggedUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(loggedUser));
  }

  logout(): void {
    this.loggedUser$.next(null);
    localStorage.setItem(this.STORAGE_KEY, null);
  }

  get loggedUser(): Observable<LoggedUser | null> {
    return this.loggedUser$.asObservable();
  }

  private mapLoggedUser({ email }: LoginCredentials): LoggedUser {
    const nickname = email.split('@')[0];
    return { email, nickname };
  }

  private getUserFromLocalStorage(): void {
    const user = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (user) {
      this.loggedUser$.next(user);
    }
  }
}
