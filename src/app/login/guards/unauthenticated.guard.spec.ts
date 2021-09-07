import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
});
