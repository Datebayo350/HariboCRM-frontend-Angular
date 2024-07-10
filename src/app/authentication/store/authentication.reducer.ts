import {createFeature, createReducer, on} from '@ngrx/store';
import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { displayLoginFormAction, loginActions, registerActions } from './authentication.actions';

const authenticationInitialState: AuthenticationStateInterface = {
  userLoggedIn: false,
  displayLoginForm: false,
  authFormIsSubmitted: false,
  authFormIsSubmitting: false,
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
    ,on(registerActions.registerFailure, (state, props) => ({
      ...state,
      authFormIsSubmitted: true,
      authFormIsSubmitting: false,
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
} = authenticationFeature;


