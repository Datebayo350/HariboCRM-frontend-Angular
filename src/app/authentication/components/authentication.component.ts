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
import {AuthenticationService} from "../services/authentication.service";
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
    private  authService : AuthenticationService
  ) {}
  displaylg = false;
  displayLoginForm$ = this.store.select(selectDisplayLoginForm);
  displayLoginFormSignal = toSignal(this.displayLoginForm$, {initialValue: false})
  registerForm = new FormGroup<FormGroupInterface>({
    lastName: !this.displayLoginFormSignal()
    // lastName: !this.displaylg
      ? new FormControl('', Validators.required)
      : undefined,

    firstName: !this.displayLoginFormSignal()
    // firstName: !this.displaylg
      ? new FormControl('', Validators.required)
      : undefined,

    username: !this.displayLoginFormSignal()
    // firstName: !this.displaylg
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
    const { lastName, firstName, username, email: emailRegister, password: passwordRegister } =
      this.registerForm.getRawValue();

    const { email: emailLogin, password: passwordLogin } =
      this.loginForm.getRawValue();

    if (!this.displayLoginFormSignal() &&  lastName && firstName && username && emailRegister && emailRegister) {
    // if (!this.displaylg && lastName && firstName && emailRegister && emailRegister) {
      this.store.dispatch(
        register({
          user: { lastName, firstName, username, email: emailRegister, password: passwordRegister },
        }),
      );
      this.authService
        .register({user : { lastName, firstName, username, email: emailRegister, password: passwordRegister }})
        .subscribe( (result) => console.log("Register result =>", result))

    }

    if (this.displayLoginFormSignal() && emailLogin && passwordLogin) {
    // if (this.displaylg && emailLogin && passwordLogin) {
      this.store.dispatch(login({ user: { email: emailLogin, password: passwordLogin } }));
      this.authService
        .register({ user: { email: emailLogin, password: passwordLogin }})
        .subscribe( (result) => console.log("Login result =>", result))


    }


  }

}
