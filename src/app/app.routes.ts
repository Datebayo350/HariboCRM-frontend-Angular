import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "connexion",
    title: "Connexion",
    component: LoginComponent
  },
  {
    path: "creation-de-compte",
    title: "Création de compte",
    component: RegistrationComponent
  },
  {
    path: "",
    title: "Authentification",
    component: AuthenticationComponent
  },
  {
    path: "**",
    title: "404-page-non-trouvée",
    component: PageNotFoundComponent
  },
];
