import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to submit form if its state is valid', () => {
    component.loginForm.setValue({
      email: 'mduraes1994@gmail.com',
      password: '123456',
    });
    const loginSubmitSpy = spyOn(component.loginSubmit, 'next');
    component.onSubmit();
    expect(loginSubmitSpy).toHaveBeenCalled();
  });

  it('should not be able to submit form if its state is invalid', () => {
    component.loginForm.setValue({
      email: 'mduraes1994',
      password: '12345',
    });
    const loginSubmitSpy = spyOn(component.loginSubmit, 'next');
    component.onSubmit();
    expect(loginSubmitSpy).not.toHaveBeenCalled();
  });
});
