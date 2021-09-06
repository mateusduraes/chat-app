import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginCredentials } from './models/login-credentials';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit(credentials: LoginCredentials): void {
    this.authService.login(credentials);
    this.router.navigate(['/chat']);
  }
}
