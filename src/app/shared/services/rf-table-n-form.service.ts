import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldType,FieldInfo } from '../constants/field-info';
import { PageInfoType ,PageInfo} from '../constants/page-info';

@Injectable({
  providedIn: 'root',
})
export class RfTableNFormService {
  readonly fieldInfo : { [key: string]: FieldType<any> } = FieldInfo;;
  currentPage: string = '';
  readonly pageInfo: { [key: string]: PageInfoType }  = PageInfo;;

  constructor() {
   
  }

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
            field.value = '';
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
          field.required ? Validators.required : null
        );
    });

    return new FormGroup(group);
  }

  // TODO: get from a remote source of question metadata
  getFields(pageName: string) {
    return this.getPageInfo(pageName).sort(
      (a: any, b: any) => a.order - b.order
    );
  }

  // get the fields corresponding to the page name
  getPageInfo(pageName: string) {
    var pageFieldMap: any = [];
    if (this.pageInfo[pageName].fields)
      this.pageInfo[pageName].fields.forEach((key: any) => {
        pageFieldMap.push(this.fieldInfo[key]);
      });
    else {
      console.warn('incorrect page name passed');
      return [];
    }
    return pageFieldMap;
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

  getFieldInfoConst(){
    return this.fieldInfo;
  }
}
