import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'main/:pagename',
    loadChildren: () =>
      import('./shared/components/rf-table-n-form/rf-table-n-form.module').then(
        (m) => m.RfTableNFormModule
      ),
      canActivate: [AngularFireAuthGuard]
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
