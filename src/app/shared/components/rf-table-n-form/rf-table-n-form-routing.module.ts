import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfTableNFormComponent } from './rf-table-n-form.component';

const routes: Routes = [{ path: '', component: RfTableNFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfTableNFormRoutingModule { }
