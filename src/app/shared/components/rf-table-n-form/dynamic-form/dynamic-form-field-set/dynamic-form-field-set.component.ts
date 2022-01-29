import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfigService } from 'src/app/shared/services/config.service';
import { RfTableNFormService } from 'src/app/shared/services/rf-table-n-form.service';
import { FieldType } from '../../../../constants/field-info';
import { Roles } from 'src/app/shared/constants/page-info';

@Component({
  selector: 'app-dynamic-form-field-set',
  templateUrl: './dynamic-form-field-set.component.html',
  styleUrls: ['./dynamic-form-field-set.component.scss'],
})
export class DynamicFormFieldSetComponent implements OnInit {
  @Input() field!: FieldType<any>;
  @Input() form!: FormGroup;
  private unsubscriber$ = new Subject<void>();
  private _role: string = '';

  isLoading: boolean = false;
  formControlGetter: FormControl = new FormControl();
  dropdownSettings: IDropdownSettings;

  constructor(
    private authService: AuthService,
    private configSer: ConfigService,
    private rfService: RfTableNFormService
  ) {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'key',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  ngOnInit(): void {
    this._role = this.authService.currUserRole;

    //-------------------- ORG ID---------------
    if (this.field.key === 'organisationId') {
      this.isLoading = true;
      this.configSer
        .getAllData('organisation')
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(
          (resp: any) => {
            this.isLoading = false;
            this.field.options = this.rfService.convertToKeyValue(
              this.setOrganisationDropdown(resp, this._role)
            );
          },
          (err) => (this.isLoading = false)
        );
    }

    // --------------------TAGS-------------------
    else if (this.field.key == 'tags') {
      this.configSer.getAllData('tag').subscribe((resp: any) => {
        this.field.options = this.rfService.convertToKeyValue(resp);
       
      });
      
    }

    //---------------------- ROLES---------------------------
    else if (this.field.key == 'roleName') {
      this.field.options = this.rfService.convertToKeyValue(
        this.setRolesDropdown()
      );
    }

    this.formControlGetter = this.form.get(this.field.key) as FormControl;

    if (
      this.field.type == 'dropdown' &&
      this.field.options &&
      this.field.options[0]
    )
      this.formControlGetter.setValue(this.field.options[0].key);
  }

  setOrganisationDropdown(_orgList: Array<any>, _role: string) {
    if (_role == 'SUPERADMIN') return _orgList;
    // PASS ALL ORGANIZATION FOR SUPERADMIN
    else {
      const _currOrg = localStorage.getItem('orgId');
      if (!_currOrg) return [];
      return _orgList.filter((org) => org.orgUniqueId == _currOrg);
    }
  }

  setRolesDropdown() {
    switch (this._role) {
      case 'SUPERADMIN':
        return Roles;
      case 'ADMIN':
        return ['MODERATOR', 'USER'];
      case 'MODERATOR':
        return ['USER'];
      case 'USER':
        return [];
      default:
        return [];
    }
  }
}
