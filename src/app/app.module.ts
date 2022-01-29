import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// // -------FIREBASE UI AUTH MODULES---------
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
// import { PERSISTENCE } from '@angular/fire/auth';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { UserRoleFilterPipe } from './shared/pipe/user-role-filter.pipe';


// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//   ],
//   tosUrl: '<your-tos-link>',
//   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE
// };
@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass : AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
