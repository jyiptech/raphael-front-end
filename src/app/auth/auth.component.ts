import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.initAuthListener();
  }


  // IF NEEDED
  // signUp() {
  //   //   this.authService.SignUp(this.email, this.password);
  //   //  form.reset();
  // }

  signIn(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      this.errorMessage = "Form is invalid"
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe(
      (res) => {
        console.log('you r in');
        this.isLoading = false;
      },
      (err: string) => {
        this.isLoading = false;
        this.errorMessage = err;
        return throwError(this.errorMessage);
      }
    );
    form.reset();
  }

  signOut() {
    this.authService.signOut();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  ngOnDestroy() {
    // this.signInObs$.unsubscribe();
  }
}
