import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { throwError } from 'rxjs/internal/observable/throwError';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ConfigService } from '../shared/services/config.service';
import { concatMap, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private readonly _unSubscriber = new Subject<void>();
  errorMessage: string = '';
  isLoading: boolean = false;
  auth$!: Subscription;
  authState!: any;
  orgId: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.authService.initAuthListener();
    //-----ACCESS ORG ID FROM ROUTE URL------------
    let _orgId = this.route.snapshot.paramMap.get('orgId');
    this.orgId = _orgId ? _orgId : '';
    localStorage.setItem('orgId', _orgId ? _orgId : '');
    this.auth$ = this.authService.userData$
      .pipe(
        concatMap((authState: any) => {
          this.authState = authState;
          return this.configService.getRoleApi(authState?.email, this.orgId);
        }),
        takeUntil(this._unSubscriber)
      )
      .subscribe((role: any) => {
        this.authService.currUserRole = role?.roleName;
        if (this.authState) {
          this.router.navigate(['/home']);
        } else this.router.navigate(['auth', { orgId: _orgId }]);
      });
  }

  // ----------------SIGN IN ---------------
  signIn(form: NgForm) {
    this.isLoading = true;
    let _orgId = this.route.snapshot.paramMap.get('orgId');
    this.orgId = _orgId ? _orgId : '';
    localStorage.setItem('orgId', _orgId ? _orgId : '');
    if (!form.valid) {
      this.errorMessage = 'Form is invalid';
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService
      .signIn(email, password)
      .pipe(
        concatMap(() => 
          this.configService.getRoleApi(email, this.orgId)
        ),
        takeUntil(this._unSubscriber)
      )
      .subscribe(
        (role: any) => {
          this.authService.currUserRole = role?.roleName;
          this.router.navigate(['/home']);
          this.isLoading = false;
        },
        (err: string) => {
          this.isLoading = false;
          this.router.navigate(['auth', { orgId: _orgId }]);
          this.errorMessage = err;
          return throwError(this.errorMessage);
        }
      );
    form.reset();
  }

  // ------------------SIGN IN WITH GOOGLE----------------------
  signInWithGoogle() {
    let _orgId = this.route.snapshot.paramMap.get('orgId');
    this.orgId = _orgId ? _orgId : '';
    localStorage.setItem('orgId', _orgId ? _orgId : '');

    this.authService
      .signInWithGoogle()
      .pipe(
        concatMap((authState: any) => {
          return this.configService.getRoleApi(authState?.email, this.orgId);
        }),
        takeUntil(this._unSubscriber)
      )
      .subscribe(
        (role: any) => {
          this.authService.currUserRole = role?.roleName;
          this.router.navigate(['/home']);
          this.isLoading = false;
        },
        (err: string) => {
          this.isLoading = false;
          this.router.navigate(['auth', { orgId: _orgId }]);
          this.errorMessage = err;
          return throwError(this.errorMessage);
        }
      );
  }

  // ----------------SIGN OUT--------------------
  signOut() {
    let _orgId = localStorage.getItem('orgId');
    _orgId = _orgId ? _orgId : '';
    this.authService.signOut()
    .pipe(takeUntil(this._unSubscriber)).subscribe(
      (_) => {
        this.authService.user = null;
        this.router.navigate(['auth', { orgId: _orgId }]);
      },
      (err) => {}
    );
  }

  ngOnDestroy() {
    this._unSubscriber.next();
    this._unSubscriber.complete();
  }
}
