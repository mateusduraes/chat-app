import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ThemeOption } from './../models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject(ThemeOption.DARK);
  constructor() {}

  changeTheme(): void {
    const currentTheme = this.currentTheme$.getValue();
    const isDarkMode = currentTheme === ThemeOption.DARK;
    this.currentTheme$.next(isDarkMode ? ThemeOption.LIGHT : ThemeOption.DARK);
  }

  get theme$(): Observable<ThemeOption> {
    return this.currentTheme$.asObservable();
  }
}
