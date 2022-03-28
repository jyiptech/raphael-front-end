import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  resolveForwardRef,
  SimpleChange,
} from '@angular/core';
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
  constructor(
    private tfService: RfTableNFormService,
    private configServ: ConfigService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(c: SimpleChange) {
    // convert to reactive form group and controls

    this.form = this.tfService.toFormGroup(this.dynFields);
  }
  transformAPIParams() {
    const apiParams = { ...this.form.value };
    // --------- DATE--------

    // By Default, date format is formcontrol is 'mm/dd/yyyy', here it is transformed into utc format
    const dateFields = this.dynFields.filter((obj) => obj.type === 'date');

    if (dateFields.length > 0)
      dateFields.map((obj: FieldType<any>) => {
        const str = obj['key'].toString();
        apiParams[str] = new Date(apiParams[str]);
      });

    // ----------MULTISELECT DROPDOWN----------
    if ('tags' in apiParams && apiParams.tags && apiParams.tags[0]) {
      apiParams['tags'] = this.form.value.tags.map((val: any) => val.key?.id);
    }
    return apiParams;
  }
  onSubmit() {
    const apiParams = this.transformAPIParams();
    this.payLoad = JSON.stringify(apiParams);
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const _currPage = this.tfService.getCurrentPage();
      if (!_currPage) return;
      let _requestData = apiParams;

      this.configServ
        .postFormData(_currPage, _requestData)
        .subscribe((response) => {
          this.form.reset();
          this.closeModal.emit();
        });
    }
  }

  onEditForm(formData: FieldType<any>) {
    this.form.patchValue(formData);
  }
}
