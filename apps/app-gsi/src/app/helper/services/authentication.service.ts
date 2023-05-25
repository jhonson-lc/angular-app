import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { ApiLoginService } from "./api-login.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private _isLogged = new BehaviorSubject<boolean>(false);
  isLogged = this._isLogged.asObservable();
  constructor(private apiLogin: ApiLoginService) {
    const token = localStorage.getItem("gsi_auth");
    this._isLogged.next(!!token);
  }

  login(username: string, password: string) {
    return this.apiLogin.login(username, password).pipe(
      tap((response: any) => {
        console.log(response);
        localStorage.setItem("gsi_auth", JSON.stringify(response));
        this._isLogged.next(true);
      }),
    );
  }
}
