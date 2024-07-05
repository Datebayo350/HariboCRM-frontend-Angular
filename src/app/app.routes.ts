import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Authentification',
    component: AuthenticationComponent,
  },
  {
    path: 'authentifié',
    loadChildren: () =>
      import('./authentication/authenticated.routes').then(
        (module) => module.authenticatedRoutes,
      ),
  },
  {
    path: '**',
    title: '404-page-non-trouvée',
    component: PageNotFoundComponent,
  },
];
