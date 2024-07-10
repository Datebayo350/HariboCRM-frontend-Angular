import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import { AuthenticationtInterface } from '../types/authentication.interface';
import {CurrentUserInterface} from "../types/currentUser.interface";

export const loginActions = createActionGroup({
  source: "Authentication",
  events: {
    Login: props<AuthenticationtInterface>(),
    "Login success": props<CurrentUserInterface>(),
    "Login failure": emptyProps(),
  }
});

export const registerActions = createActionGroup({
  source: "Authentication",
  events: {
      Register: props<AuthenticationtInterface>(),
      "Register success": props<CurrentUserInterface>(),
      "Register failure": emptyProps(),
    }
  }
);

export const displayLoginFormAction = createAction(
  '[Authentication] Display Login Form',
);
