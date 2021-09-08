import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AuthService } from './../services/auth.service';
import { AuthenticatedGuard } from './authenticated.guard';

describe('AuthenticatedGuard', () => {
  let guard: AuthenticatedGuard;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    router = TestBed.inject(Router);
    authService = new AuthService();
    guard = new AuthenticatedGuard(authService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return observable of #true when there is a user authenticated', (doneFn) => {
    spyOnProperty<any>(authService, 'loggedUser', 'get').and.returnValue(
      of({}),
    );
    guard.canActivate().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(true);
      doneFn();
    });
  });

  it('should return observable of #false when there is not a user authenticated', (doneFn) => {
    spyOnProperty<any>(authService, 'loggedUser', 'get').and.returnValue(
      of(null),
    );
    guard.canActivate().subscribe((isAuthenticated) => {
      expect(isAuthenticated).toBe(false);
      doneFn();
    });
  });
});
