import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfModalComponent } from './components/rf-modal/rf-modal.component';
import { RfSidenavComponent } from './components/rf-sidenav/rf-sidenav.component';
import { SharedService } from './services/shared.service';
import { ConfigService } from './services/config.service';
import { RfTableNFormService } from './services/rf-table-n-form.service';
import { LoadingRippleComponent } from './components/loading-ripple/loading-ripple.component';

@NgModule({
  declarations: [RfModalComponent,RfSidenavComponent, LoadingRippleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RfModalComponent,
    RfSidenavComponent,
    LoadingRippleComponent
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
