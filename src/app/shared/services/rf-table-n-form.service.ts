import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldType, FieldInfo } from '../constants/field-info';
import { PageInfoType, PageInfo } from '../constants/page-info';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class RfTableNFormService {
  readonly fieldInfo: { [key: string]: FieldType<any> } = FieldInfo;
  currentPage: string = '';
  readonly pageInfo: { [key: string]: PageInfoType } = PageInfo;

  constructor(private configService: ConfigService) {}

  // converting to form group
  toFormGroup(dynFields: FieldType<any>[]) {
    const group: any = {};

    dynFields.forEach((field) => {
      if (!field.value)
        switch (field.type) {
          case 'date':
            field.value = new Date();
            break;
          case 'text':
            field.value = (field.key === 'phone')? '+' : '';
            break;
          case 'number':
            field.value = null;
            break;
          case 'checkbox':
            field.value = false;
            break;
         
          default:
            field.value = null;
            break;
        }
      if (!['createdOn', 'id'].includes(field.key))
        group[field.key] = new FormControl(
          field.value,
          this.getValidatorsList(field)
        );
    });

    return new FormGroup(group);
  }

  getValidatorsList(field: FieldType<any>) {
    let valArr = [];
    if (field.required) valArr.push(Validators.required);
    if (field.key === 'phone')
      valArr.push(Validators.pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/));
    else if (field.key == 'email')
      valArr.push(
        Validators.pattern(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
      );

    return valArr;
  }
  getFields(
    pageName: string,
    roles?: Array<any>,
    organizations?: Array<any>,
    tagList?: Array<any>
  ) {
    return this.getPageInfo(pageName).sort(
      (a: any, b: any) => a.order - b.order
    );
  }

  // get the fields corresponding to the page name
  getPageInfo(pageName: string) {
    var pageFieldMap: any = [];

    this.pageInfo[pageName].fields.forEach((key: any) => {
      pageFieldMap.push(this.fieldInfo[key]);
    });

    return pageFieldMap;
  }

  convertToKeyValue(dropdownOptions: any) {
    return dropdownOptions.map((option: any) => {
      return {
        key:
          option &&
          option.orgUniqueId != null &&
          typeof option.orgUniqueId != undefined
            ? option.orgUniqueId
            : option,
        value: option && option.name ? option.name : option,
      };
    });
  }
  getCurrentPage() {
    return this.currentPage;
  }
  setCurrentPage(pageName: string) {
    this.currentPage = pageName;
  }

  getPageInfoConst() {
    return this.pageInfo;
  }

  getFieldInfoConst() {
    return this.fieldInfo;
  }
}
