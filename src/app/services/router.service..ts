import {Injectable} from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router){}

  redirectTo(pathToRedirection:string) : void {
    this.router.navigate([pathToRedirection])
  }
}

