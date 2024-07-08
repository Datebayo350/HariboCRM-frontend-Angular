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

  displayLoginForm$ = this.store.select(selectDisplayLoginForm);

  registerForm = new FormGroup<FormGroupInterface>({
    lastName: !this.displayLoginForm$
      ? new FormControl('', Validators.required)
      : undefined,

    firstName: !this.displayLoginForm$
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
    console.log(this.displayLoginForm$);
    const { lastName, firstName, email, password } =
      this.registerForm.getRawValue();

    if (this.displayLoginForm$ && lastName && firstName && email && password) {
      this.store.dispatch(
        register({
          user: { lastName, firstName, email, password },
        }),
      );
    } else if (this.displayLoginForm$ && email && password) {
      this.store.dispatch(login({ user: { email, password } }));
    }

    console.log(this.registerForm.getRawValue());
  }

  protected readonly login = login;
  protected readonly displayLoginForm = displayLoginForm;
}
