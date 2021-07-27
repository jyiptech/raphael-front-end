import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { throwError, from, Observable, ObservableInput } from 'rxjs';
import firebase from 'firebase/app';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, take } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData$: Observable<firebase.User | null>;
  user!: firebase.User | null;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData$ = angularFireAuth?.authState;
    this.userData$.subscribe((response) => (this.user = response));
  }

  // -------------FETCHES JWT-----------------
  public getToken$(): Observable<firebase.auth.IdTokenResult> {
    return from(this.angularFireAuth.currentUser).pipe(
      take(1),
      switchMap((user) => {
        return from(user?.getIdTokenResult(true) as ObservableInput<any>);
      }),
      catchError(this.handleError)
    );
  }

  // ------------LISTENS TO AUTH STATE : LOGGED IN | LOGGED OUT------------------------
  initAuthListener() {
    this.angularFireAuth.onAuthStateChanged((user) => {
      if (user) {
        // code
      } else {
        this.angularFireAuth.signOut();
      }
    });
  }

  // --------------SIGNIN API CALL----------------------

  signIn(email: string, password: string) {
    return from(
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
    ).pipe(take(1), catchError(this.handleSignInError));
  }

  // ---------------SIGNIN WITH GOOGLE API CALL---------------------

  signInWithGoogle() {
    return from(
      this.angularFireAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
    ).pipe(take(1), catchError(this.handleError));
  }

  // ---------------SIGN OUT---------------------

  signOut() {
    return from(this.angularFireAuth.signOut()).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  // -----------------DELETE ACCOUNT-------------------

  deleteAccount() {
    if (!this.user) return;
    return from(this.user.delete()).pipe(take(1), catchError(this.handleError));
  }

  // ---------------ERROR HANDLER----------------
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  private handleSignInError(errorRes: any) {
    var errorMessage = 'An unknown error occurred!';

    if (!errorRes || !errorRes.message) {
      return throwError(errorMessage);
    }

    switch (errorRes.code) {
      case 'auth/invalid_id_token':
        errorMessage =
          'Invalid credentials. Please signin with valid username and password';
        break;
      case 'auth/user-not-found':
      case 'auth/email_not_found':
        errorMessage = 'Please provide an authorized email address.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Please enter a valid password.';
    }
    return throwError(errorMessage);
  }
}
