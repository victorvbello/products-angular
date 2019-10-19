import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { UserService } from "../services/user.service";
import { User } from "../types";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isUserLogin: Boolean;
  currentUser: User;

  constructor(
    public authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.setClearUser();
  }

  ngOnInit() {
    this.checkLogin();
    this.loadUserData();
  }

  checkLogin() {
    this.authService.isUserLogin.subscribe((action: Boolean) => {
      this.isUserLogin = action;
      this.loadUserData();
    });
  }

  loadUserData() {
    this.userService.getCurrentUser().then(
      (user: User) => (this.currentUser = user),
      err => {
        console.log("Get current user error", err);
      }
    );
  }

  setClearUser() {
    this.currentUser = new User();
  }

  logout() {
    this.authService.logout().then(
      () => {
        this.router.navigate(["/login"]);
        this.setClearUser();
      },
      error => {
        console.log("Logout error", error);
      }
    );
  }
}
