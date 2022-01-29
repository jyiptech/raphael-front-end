import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription, throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'raphael';
  isLoading = true;
  auth$ : Subscription;
  constructor( private authServ:AuthService) {
    this.auth$ = this.authServ.userData$.subscribe((authState : any) => {
      // authState?.delete().then(_ => console.log('sd'))
      this.isLoading = false;
      // if (authState) this.router.navigate(['/main','contact']);
      // else this.router.navigate(['auth']);
    },
    (err: string) => {
      this.isLoading = false;
      alert(err)
      return throwError(err);
    });
  }

  ngOnDestroy(){
    this.auth$.unsubscribe();
  }
}
