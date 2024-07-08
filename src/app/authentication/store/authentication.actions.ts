import { createAction, props } from '@ngrx/store';
import { AuthenticationtInterface } from '../types/authentication.interface';

export const login = createAction(
  '[Authentication] Login',
  props<AuthenticationtInterface>(),
);
export const register = createAction(
  '[Authentication] Register',
  props<AuthenticationtInterface>(),
);

export const displayLoginForm = createAction(
  '[Authentication] Display Login Form',
);
