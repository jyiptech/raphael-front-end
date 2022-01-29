import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective {
  userRoles: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
) { }
@Input() 
set appUserRole(roles: string[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }
    this.userRoles = roles;
}
ngOnInit() {
    let hasAccess = false;
    if (this.authService.user && this.userRoles) {
        hasAccess = this.userRoles.includes(this.authService.currUserRole);
    }
    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}
}
