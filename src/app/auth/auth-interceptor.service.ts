import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // TAKE(1) :UNSUBSCRIBES AFTER FIRST EMISSION, EXHAUST MAP: Map to inner observable, ignore other values until that observable completes

    // Gets token and appends it to every request

    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.authService.getToken$()}`,
    //   },
    // });

    // return next.handle(req);

    return this.authService.getToken$().pipe(
      take(1),
      exhaustMap((user) => {
        const modifiedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`,
          },
          // params: new HttpParams().set('Authorization','Bearer '+ user.token),
        });
        return next.handle(modifiedReq);
      }),
      catchError((err: any, caught: Observable<any>) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authService.signOut();
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
        // })
      })
    );
  }
  constructor(private authService: AuthService) {}
}

// return from(this.angularFireAuth.currentUser).pipe(
//   exhaustMap((user) =>
//     from(user?.getIdTokenResult(true)).subscribe(
//       map((token:string) => {
//         const modifiedReq = req.clone({
//           params: new HttpParams().set('auth', token),
//         });
//         return next.handle(modifiedReq);
//       })
//     )
//   )
// ) as Observable<HttpEvent<any>>;;
