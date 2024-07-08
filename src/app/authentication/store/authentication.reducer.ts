import {createFeature, createReducer, on} from '@ngrx/store';
import { AuthenticationStateInterface } from '../types/authenticationState.interface';
import { displayLoginForm, login, register } from './authentication.actions';

const authenticationInitialState: AuthenticationStateInterface = {
  userLoggedIn: false,
  displayLoginForm: true,
  authFormIsSubmitted: false,
  authFormIsSubmitting: false,
};

export const authenticationFeature = createFeature({
  name: "authentication",
  reducer: createReducer(
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

    on(displayLoginForm, (state) => ({
      ...state,
      displayLoginForm: !state.displayLoginForm,
    })),
  )});

export const {name: authenticationFeatureKey, reducer :authenticationReducer} = authenticationFeature;
