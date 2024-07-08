import { Component } from '@angular/core';
import { AuthenticatedComponent } from '../../authenticated/authenticated.component';
import { LoginComponent } from '../../login/login.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { RouterService } from '../../services/router.service.';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { AuthenticationNavComponent } from '../../authentication-nav/authentication-nav.component';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  displayLoginForm,
  login,
  register,
} from '../store/authentication.actions';
import { FormGroupInterface } from '../types/formgroup.interface';
import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { selectDisplayLoginForm } from '../selectors/authentication.selector';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    LoginComponent,
    AuthenticatedComponent,
    NavigationComponent,
    NgOptimizedImage,
    AuthenticationNavComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  providers: [provideImgixLoader('http://localhost:4200/assets/images/')],
})
export class AuthenticationComponent {
  constructor(
    protected router: RouterService,
    private store: Store<{ authentication: AuthenticationStateInterface }>,
  ) {}

  displayLoginForm = false;

  registerForm = new FormGroup<FormGroupInterface>({
    lastName: !this.displayLoginForm
      ? new FormControl('', Validators.required)
      : undefined,

    firstName: !this.displayLoginForm
      ? new FormControl('', Validators.required)
      : undefined,

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  loginForm = new FormGroup<{
    email: FormControl;
    password: FormControl;
  }>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    const { lastName, firstName, email: emailRegister, password: passwordRegister } =
      this.registerForm.getRawValue();

    const { email: emailLogin, password: passwordLogin } =
      this.loginForm.getRawValue();

    if (!this.displayLoginForm && lastName && firstName && emailRegister && emailRegister) {
      console.log("Register");
      console.log(this.registerForm.getRawValue());
      this.store.dispatch(
        register({
          user: { lastName, firstName, email:emailRegister, password: passwordRegister },
        }),
      );
    }
    if (this.displayLoginForm && emailLogin && passwordLogin) {
      console.log("Login");
      console.log(this.loginForm.getRawValue());
      this.store.dispatch(login({ user: { email: emailLogin, password: passwordLogin } }));
    }

  }

}
