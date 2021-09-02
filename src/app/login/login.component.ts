import { Component } from '@angular/core';

import { LoginSubmitEvent } from './components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}

  onLoginSubmit({ email, password }: LoginSubmitEvent): void {
    console.log('email', email);
    console.log('password', password);
  }
}
