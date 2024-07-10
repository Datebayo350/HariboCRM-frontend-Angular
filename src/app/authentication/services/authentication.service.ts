import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationtInterface} from "../types/authentication.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http:HttpClient) {}
//TODO : Find the right type for the return
  register (data:AuthenticationtInterface ): Observable<any> {

    const url = environment.apiTest+ "/users";
    return this.http
      .post(url, data)
      .pipe(map( (response) => {
        return {user : response};
      })
    );
  }
}
