
import { Component, EventEmitter, Input, OnInit, Output, resolveForwardRef, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ConfigService } from 'src/app/shared/services/config.service';
import { RfTableNFormService } from 'src/app/shared/services/rf-table-n-form.service';
import { FieldType } from '../../../constants/field-info';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],

})
export class DynamicFormComponent implements OnInit {
  @Input() dynFields: FieldType<string>[] = [];
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  payLoad = '';
  constructor(private tfService: RfTableNFormService, private configServ: ConfigService) { }

  ngOnInit(): void {
  }

  ngOnChanges(c: SimpleChange) {
    // convert to reactive form group and controls

    this.form = this.tfService.toFormGroup(this.dynFields);

  }

  onSubmit() {

    // By Default, date format is formcontrol is 'mm/dd/yyyy', here it is transformed into utc format
    const dateFields = this.dynFields.filter(obj => obj.type === 'date');

    if (dateFields.length > 0)
      dateFields.map((obj: FieldType<any>) => {
        const str = obj['key'].toString();
        this.form.value[str] = new Date(this.form.value[str])
      }
      );

    this.payLoad = JSON.stringify(this.form.value);
    if (this.form.valid) {
      const page = this.tfService.getCurrentPage();
      if(!page) return;

      this.configServ.postFormData(page, this.form.value).subscribe(response => {
        console.log(response);
        this.form.reset();
        this.closeModal.emit();
      }
      )
    }
  }

  onEditForm(formData: FieldType<any>) {
    this.form.patchValue(formData);
  }
}
