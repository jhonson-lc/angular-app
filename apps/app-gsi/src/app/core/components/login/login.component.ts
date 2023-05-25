import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/helper/services/authentication.service";

@Component({
  selector: "gsi-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  hidePassword = true;
  group: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.group = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  login() {
    this.authService
      .login(this.group.value.username, this.group.value.password)
      .subscribe((response) => {
        this.router.navigate(["/reportes"]);
      });
  }
}
