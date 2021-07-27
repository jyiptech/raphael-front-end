import { Component,  Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldType } from '../../../../constants/field-info';

@Component({
  selector: 'app-dynamic-form-field-set',
  templateUrl: './dynamic-form-field-set.component.html',
  styleUrls: ['./dynamic-form-field-set.component.scss']
})
export class DynamicFormFieldSetComponent implements OnInit {

  @Input() field!: FieldType<any>;
  @Input() form!: FormGroup;
  formControlGetter : FormControl = new FormControl();

  constructor() {
    
  }

  ngOnInit(): void {
    this.formControlGetter = this.form.get(this.field.key) as FormControl;
  }

}
