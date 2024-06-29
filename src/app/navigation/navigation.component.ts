import { Component } from '@angular/core';
import {routes} from "../app.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  protected readonly routes = routes;
}
