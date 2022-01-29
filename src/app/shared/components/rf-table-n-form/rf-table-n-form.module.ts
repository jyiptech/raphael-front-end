import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfTableNFormRoutingModule } from './rf-table-n-form-routing.module';
import { RfTableNFormComponent } from './rf-table-n-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldSetComponent } from './dynamic-form/dynamic-form-field-set/dynamic-form-field-set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [RfTableNFormComponent, DynamicFormComponent,
    DynamicFormFieldSetComponent,
    DynamicTableComponent,
  ],
  imports: [
    CommonModule,
    RfTableNFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class RfTableNFormModule { }
