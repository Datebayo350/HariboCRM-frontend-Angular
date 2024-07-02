import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app2.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
