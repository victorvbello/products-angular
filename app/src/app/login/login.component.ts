import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {}

  tryGoogleLogin() {
    this.authService.loginGoogle().then(() => {
      this.router.navigate(["/products"]);
    });
  }
}
