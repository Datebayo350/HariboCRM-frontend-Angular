import { createReducer, on } from '@ngrx/store';
import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { displayLoginForm, login, register } from './authentication.actions';

const authenticationInitialState: AuthenticationStateInterface = {
  userLoggedIn: false,
  displayLoginForm: true,
  authFormIsSubmitted: false,
  authFormIsSubmitting: false,
};

export const authenticationReducer = createReducer(
  authenticationInitialState,
  on(register, (state) => ({
    ...state,
    authFormIsSubmitted: true,
    authFormIsSubmitting: true,
  })),
  on(login, (state) => ({
    ...state,
    authFormIsSubmitted: true,
    authFormIsSubmitting: true,
  })),
  on(displayLoginForm, (state) => ({
    ...state,
    displayLoginForm: !state.displayLoginForm,
  })),
);
