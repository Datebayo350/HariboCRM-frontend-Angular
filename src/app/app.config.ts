import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {authenticationFeatureKey, authenticationReducer} from "./authentication/store/authentication.reducer";
import {provideHttpClient} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import * as authenticationEffects from "./authentication/store/authentication.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideStore(),
    provideState(authenticationFeatureKey, authenticationReducer),
    provideEffects(authenticationEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
