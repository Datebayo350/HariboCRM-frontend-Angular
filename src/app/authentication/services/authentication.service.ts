import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationtInterface} from "../types/authentication.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {CurrentUserInterface} from "../types/currentUser.interface";
import {AuthenticationResponseInterface} from "../types/authenticationResponse.interface";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http:HttpClient) {}
  register (newUser:AuthenticationtInterface ): Observable<CurrentUserInterface> {

    const url = environment.apiTest+ "/users";
    return this.http
      .post<AuthenticationResponseInterface>(url, newUser)
      .pipe(map( (response) => response.user));
  }
}
