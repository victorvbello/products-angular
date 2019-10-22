import { Injectable, EventEmitter, Output } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
@Output() isUserLogin: EventEmitter<any> = new EventEmitter();

  constructor(public afAuth: AngularFireAuth) {}

  loginGoogle() {
    return new Promise<any>(resolve => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithPopup(provider).then(res => {
        this.isUserLogin.emit(true);
        resolve(res);
      });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        this.isUserLogin.emit(false);
        resolve();
      } else {
        reject();
      }
    });
  }
}
