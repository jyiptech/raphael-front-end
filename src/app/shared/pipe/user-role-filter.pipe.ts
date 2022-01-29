import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Pipe({
  name: 'userRoleFilter',
})
export class UserRoleFilterPipe implements PipeTransform {
  // @Input()
  // set appUserRole(roles: Role[]) {
  //     if (!roles || !roles.length) {
  //         throw new Error('Roles value is empty or missed');
  //     }
  //     this.userRoles = roles;
  // }
  constructor(private authService: AuthService) {}
  transform(menuList: Routes): Routes {
    if (!menuList) return [];

    return menuList.filter((menu) => {
     return menu?.data?.roles.includes( this.authService.currUserRole);
    });
  }
}
