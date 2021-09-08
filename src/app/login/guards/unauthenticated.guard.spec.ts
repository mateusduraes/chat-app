import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AuthService } from './../services/auth.service';
import { UnauthenticatedGuard } from './unauthenticated.guard';

describe('UnauthenticatedGuard', () => {
  let guard: UnauthenticatedGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'chat',
            redirectTo: '',
          },
        ]),
      ],
    });
    guard = TestBed.inject(UnauthenticatedGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return observable of #false when there is a user authenticated', (doneFn) => {
    spyOnProperty<any>(authService, 'loggedUser', 'get').and.returnValue(
      of({}),
    );
    guard.canActivate().subscribe((isUnauthenticated) => {
      expect(isUnauthenticated).toBe(false);
      doneFn();
    });
  });

  it('should return observable of #true when there is not a user authenticated', (doneFn) => {
    spyOnProperty<any>(authService, 'loggedUser', 'get').and.returnValue(
      of(null),
    );
    guard.canActivate().subscribe((isUnauthenticated) => {
      expect(isUnauthenticated).toBe(true);
      doneFn();
    });
  });
});
