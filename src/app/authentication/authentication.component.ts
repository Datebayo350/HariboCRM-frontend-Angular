import { Component } from '@angular/core';
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterService} from "../services/router.service.";
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {AuthenticationNavComponent} from "../authentication-nav/authentication-nav.component";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LoginComponent, RegistrationComponent, NavigationComponent, NgOptimizedImage,AuthenticationNavComponent, ReactiveFormsModule ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  providers: [
    provideImgixLoader("http://localhost:4200/assets/images/"),
  ],
})
export class AuthenticationComponent {
constructor(protected router: RouterService) {
}
  // Afficher le formulaire de connexion ou inscription en fonction du choix de l'utilisateur
  userSelectLogin:boolean = false;

  registerForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email,]),
    password : new FormControl('', Validators.required)
  });
  handleSubmit (){
    // NgRx managent here call to action to send it to the api
    alert(this.registerForm.value.name)
    alert(this.registerForm.value.email)
    alert(this.registerForm.value.password)
  }
}
