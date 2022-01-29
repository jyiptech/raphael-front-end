import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/auth/0000', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./shared/components/rf-table-n-form/rf-table-n-form.module').then(
        (m) => m.RfTableNFormModule
      ),
      canActivate: [AngularFireAuthGuard]
  },
  { path: 'auth/:orgId', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: AuthComponent },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
