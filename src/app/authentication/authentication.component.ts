import { Component } from '@angular/core';
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterService} from "../services/router.service.";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LoginComponent, RegistrationComponent, NavigationComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
constructor(protected router: RouterService) {
}
  userSelectLogin:boolean = false;
}
