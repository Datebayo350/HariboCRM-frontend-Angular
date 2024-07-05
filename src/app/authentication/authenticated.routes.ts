import { Route } from '@angular/router';
import { AuthenticatedComponent } from '../authenticated/authenticated.component';

export const authenticatedRoutes: Route[] = [
  {
    path: '',
    component: AuthenticatedComponent,
  },
];
