import { Component } from '@angular/core';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterService } from '../services/router.service.';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { AuthenticationNavComponent } from '../authentication-nav/authentication-nav.component';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, register } from '../app-store/actions/authentication.actions';

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
    private store: Store,
  ) {}

  userSelectLogin: boolean = false;

  userIsLoggedIn$: boolean = false;

  registerForm = new FormGroup<{
    name?: FormControl;
    email: FormControl;
    password: FormControl;
  }>({
    name: !this.userSelectLogin
      ? new FormControl('', Validators.required)
      : undefined,
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    const { name, email, password } = this.registerForm.getRawValue();

    if (!this.userSelectLogin && name && email && password) {
      this.store.dispatch(register({ name, email, password }));
    } else if (this.userSelectLogin && email && password) {
      this.store.dispatch(login({ email, password }));
    }

    console.log(this.registerForm.getRawValue());
  }
}
