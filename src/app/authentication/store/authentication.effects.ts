import {createEffect, Actions, ofType, FunctionalEffect} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {registerActions} from "./authentication.actions";
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { PersistenceService } from '../../shared/services/persistence.service';
import { Router } from '@angular/router';
import { RouterService } from '../../services/router.service.';

/** @ngrx/effects - doc : https://ngrx.io/guide/effects
 *  createEffect function has 2 parameters :
 *  - 1 : first argument is a function with 2 parameters, and the second is an options config object
 *      params :
 *        - $actions = We inject the actions we stored. Contains a stream of all actions happening in the application
 *        - authService = We inject the authentication service; We want to call the API service and the register function WITH "EFFECT"
 *        Return an Observable
 *
 *  - 2 : second is a configuration object
 *
 * Options object : functional true because the effect is written in a functional way
 *
 */
export const registerUserEffect  = createEffect(
  (
    actions$ = inject(Actions),
   authService = inject(AuthenticationService),
    persistenceService = inject(PersistenceService)
  ) => {
    // we use pipe to group all our actions
    // pipe config :
    //  - ofType : Limite the actions stream to just actions needed ( authenticationActions
    //  - switchMap : Allow us to return an Observable ( we can destructure it directly )
    return actions$.pipe(
      ofType(registerActions.register),
      exhaustMap(({user}) => {
        return authService.register({user: user}).pipe(
          map((currentUser: CurrentUserInterface) => {

            persistenceService.set("accessToken", currentUser.token);
            return registerActions.registerSuccess({...currentUser})
          }),

          catchError(({ error }) =>  of(registerActions.registerFailure({ error })
          ))
        )
      })
    )
  },
  {functional: true}
  );

export const redirectAfterRegistrationEffect = createEffect(
  (
    actions$ = inject(Actions),
      router = inject(RouterService)
  ) => {
  return actions$.pipe(
    ofType(registerActions.registerSuccess),
    tap( () => {
      router.redirectTo("/accueil");
    })
  )
}, {functional: true, dispatch : false}
)
