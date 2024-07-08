import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { createSelector } from '@ngrx/store';

export const authenticationState = (state: {
  authentication: AuthenticationStateInterface;
}) => state.authentication;

export const selectDisplayLoginForm = createSelector(
  authenticationState,
  (state) => state.displayLoginForm,
);
