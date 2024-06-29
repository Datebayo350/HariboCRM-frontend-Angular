import { Component } from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";

@Component({
  selector: 'app-authentication-nav',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './authentication-nav.component.html',
  styleUrl: './authentication-nav.component.css',
  providers: [
    provideImgixLoader("http://localhost:4200/assets/images/"),
  ],
})
export class AuthenticationNavComponent {}
