import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type LoginSubmitEvent = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword = true;
  @Output() loginSubmit = new EventEmitter<LoginSubmitEvent>();

  constructor(private formBuilder: FormBuilder) {}

  submit(): void {
    const { value } = this.loginForm;
    this.loginSubmit.next(value);
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
