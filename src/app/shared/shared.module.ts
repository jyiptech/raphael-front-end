import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfModalComponent } from './components/rf-modal/rf-modal.component';
import { RfSidenavComponent } from './components/rf-sidenav/rf-sidenav.component';
import { SharedService } from './services/shared.service';
import { ConfigService } from './services/config.service';
import { RfTableNFormService } from './services/rf-table-n-form.service';
import { LoadingRippleComponent } from './components/loading-ripple/loading-ripple.component';
// import { UserRoleDirective } from './directives/user-role.directive';
// import { UserRoleFilterPipe } from './pipe/user-role-filter.pipe';
import { RouterModule } from '@angular/router';
import { UserRoleDirective } from './directives/user-role.directive';
import { UserRoleFilterPipe } from './pipe/user-role-filter.pipe';

@NgModule({
  declarations: [RfModalComponent,RfSidenavComponent, LoadingRippleComponent,UserRoleFilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    RfModalComponent,
    RfSidenavComponent,
    LoadingRippleComponent,
    UserRoleFilterPipe
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<object> {
    return {
      ngModule: SharedModule,
      providers: [
        ConfigService,
        SharedService,
        RfTableNFormService
        ]
    };

  }
 }
