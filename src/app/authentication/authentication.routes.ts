import { Route } from '@angular/router';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';
import { AuthenticationComponent } from './components/authentication.component';

export const authenticationRoutes: Route[] = [
  {
    path: '',
    component: AuthenticatedComponent,
  },
];
