import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'raphael';
  isLoading = true;
  constructor( private router: Router,private authServ:AuthService) {
    this.authServ.userData$.subscribe((authState : any) => {
      // authState?.delete().then(_ => console.log('sd'))
      this.isLoading = false;
      if (authState) this.router.navigate(['/main','contact']);
      else this.router.navigate(['auth']);
    },
    (err: string) => {
      this.isLoading = false;
      alert(err)
      return throwError(err);
    });
  }
}
