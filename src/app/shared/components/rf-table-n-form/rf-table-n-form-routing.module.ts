import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPagesGuard } from 'src/app/secure-inner-pages.guard';
import { RfTableNFormComponent } from './rf-table-n-form.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: RfTableNFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: RfTableNFormComponent,
    data: { roles:['ADMIN','MODERATOR','USER']   },
    canActivate:[SecureInnerPagesGuard]
  },
  {
    path: 'organisation',
    component: RfTableNFormComponent,
    data: { roles: ['SUPERADMIN'] },
    canActivate:[SecureInnerPagesGuard]

  },
  // {
  //   path: 'role',
  //   component: RfTableNFormComponent,
  //   data: { roles: [Role.SUPER_ADMIN, Role.MODERATOR] },
  //   canActivate:[SecureInnerPagesGuard]

  // },
  {
    path: 'tag',
    component: RfTableNFormComponent,
    data: { roles: ['ADMIN','MODERATOR','USER'] },
    canActivate:[SecureInnerPagesGuard]

  },
  {
    path: 'users',
    component: RfTableNFormComponent,
    data: { roles: ['SUPERADMIN','ADMIN','MODERATOR']  },
    canActivate:[SecureInnerPagesGuard]

  },
  // {
  //   path: 'event',
  //   component: RfTableNFormComponent,
  //   data: { roles: [Role.SUPER_ADMIN] },
  //   canActivate:[SecureInnerPagesGuard]

  // },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class RfTableNFormRoutingModule {}
