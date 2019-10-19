import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { User } from "../types";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(public afAuth: AngularFireAuth) {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(authData => {
        const user = new User();
        if (authData) {
          user.avatar = authData.providerData[0].photoURL;
          user.name = authData.providerData[0].displayName;
          user.email = authData.providerData[0].email;
          user.provider = authData.providerData[0].providerId;
          resolve(user);
        } else {
          reject("No user logged in");
        }
      });
    });
  }
}
