import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/components/authentication.component';
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
      import('./authentication/authentication.routes').then(
        (module) => module.authenticationRoutes,
      ),
  },
  {
    path: '**',
    title: '404-page-non-trouvée',
    component: PageNotFoundComponent,
  },
];
