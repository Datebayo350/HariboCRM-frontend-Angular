import { Component } from '@angular/core';
import { AuthenticatedComponent } from '../../authenticated/authenticated.component';
import { LoginComponent } from '../../login/login.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { RouterService } from '../../services/router.service.';
import {AsyncPipe, NgOptimizedImage, provideImgixLoader} from '@angular/common';
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
import { Store } from '@ngrx/store';
import {selectDisplayLoginForm} from "../store/authentication.reducer";
import {toSignal} from "@angular/core/rxjs-interop";
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
    AsyncPipe,
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

  displayLoginForm$ = this.store.select(selectDisplayLoginForm);
  displayLoginFormSignal = toSignal(this.displayLoginForm$, {initialValue: false})
  registerForm = new FormGroup<FormGroupInterface>({
    lastName: !this.displayLoginFormSignal()
    // lastName: !this.displayLoginForm
      ? new FormControl('', Validators.required)
      : undefined,

    firstName: !this.displayLoginFormSignal()
    // firstName: !this.displayLoginForm
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

  onDisplayLoginForm () {
    this.store.dispatch(displayLoginForm());
  }
  onSubmit() {
    const { lastName, firstName, email: emailRegister, password: passwordRegister } =
      this.registerForm.getRawValue();

    const { email: emailLogin, password: passwordLogin } =
      this.loginForm.getRawValue();

    if (!this.displayLoginFormSignal() && lastName && firstName && emailRegister && emailRegister) {
      console.log(this.registerForm.getRawValue());
      this.store.dispatch(
        register({
          user: { lastName, firstName, email:emailRegister, password: passwordRegister },
        }),
      );
    }
    if (this.displayLoginFormSignal() && emailLogin && passwordLogin) {
      console.log(this.loginForm.getRawValue());
      this.store.dispatch(login({ user: { email: emailLogin, password: passwordLogin } }));
    }

  }

}
