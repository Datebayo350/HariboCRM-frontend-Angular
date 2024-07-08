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
import { appState } from './store/appState';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideState(appState),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
