import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "../user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  onUserAuthenticate(currentUrl: string, resolve: (r: boolean) => void) {
    if (currentUrl === "/login") {
      this.router.navigate(["/products"]);
      return resolve(false);
    } else {
      return resolve(true);
    }
  }

  onUserNotAuthenticate(currentUrl: string, resolve: (r: boolean) => void) {
    if (currentUrl === "/login") {
      return resolve(true);
    } else {
      this.router.navigate(["/login"]);
      return resolve(false);
    }
  }

  canActivate(_: any, state: RouterStateSnapshot): Promise<boolean> {
    const currentUrl = state.url;
    return new Promise(resolve => {
      this.userService
        .getCurrentUser()
        .subscribe(
          () => this.onUserAuthenticate(currentUrl, resolve),
          () => this.onUserNotAuthenticate(currentUrl, resolve)
        );
    });
  }
}
