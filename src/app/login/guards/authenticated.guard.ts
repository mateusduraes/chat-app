import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.loggedUser.pipe(
      map((user) => !!user),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/']);
        }
      }),
    );
  }
}
