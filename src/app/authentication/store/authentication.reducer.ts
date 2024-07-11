import {createFeature, createReducer, on} from '@ngrx/store';
import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { displayLoginFormAction, loginActions, registerActions } from './authentication.actions';
import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";
const authenticationInitialState: AuthenticationStateInterface = {
  userLoggedIn: false,
  displayLoginForm: false,
  authFormIsSubmitted: false,
  authFormIsSubmitting: false,
  backendErrors: {} as BackendErrorsInterface,
};

export const authenticationFeature = createFeature({
  name: "authentication",
  reducer: createReducer(
    authenticationInitialState,
    on(registerActions.registerSuccess, (state, props) => ({
      ...state,
      userLoggedIn: !state.userLoggedIn,
      currentUser : {...props},
      authFormIsSubmitted: true,
      authFormIsSubmitting: true,
    }))
    ,on(registerActions.registerFailure, (state, action) => ({
      ...state,
      authFormIsSubmitted: true,
      authFormIsSubmitting: false,
      backendErrors: action['error']
    })),
    on(loginActions.loginSuccess, (state, props) => ({
      ...state,
      userLoggedIn: !state.userLoggedIn,
      currentUser : {...props},
      authFormIsSubmitted: true,
      authFormIsSubmitting: true,
    })),
    on(displayLoginFormAction, (state) => ({
      ...state,
      displayLoginForm: !state.displayLoginForm,
    })),
  )});

export const {
  name: authenticationFeatureKey,
  reducer :authenticationReducer,
  selectDisplayLoginForm,
  selectBackendErrors,
} = authenticationFeature;


