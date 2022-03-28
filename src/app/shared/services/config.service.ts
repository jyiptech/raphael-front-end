import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PageInfo, PageInfoType } from '../constants/page-info';

const configUrl = 'https://raphael-service.herokuapp.com/api/';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  pageInfo: { [key: string]: PageInfoType } = PageInfo;
  constructor(private http: HttpClient) {}
  pagesWithoutOrgID = ['organisation', 'role']; // api which doesnt need organisation ID added in the request url
  //----------RETURNS CORRESPONDING PAGE'S GETAPIS FROM PAGEINFO CONSTANT--------------
  getGetApi(page: string) {
    return this.pageInfo[page].getApis;
  }

  //-----------RETURNS CORRESPONSING PAGE'S POSTAPIS PAGEINFO CONSTANT-------------

  getCreateApi(page: string) {
    return this.pageInfo[page].postApis;
  }

  //------------RETURNING HTTP REQUEST FOR GET------------

  getAllData(page: string, orgId?: string) {
    let _url =
      (this.pagesWithoutOrgID.includes(page) ? '' : this.getOrgId(page)) +
      this.getGetApi(page);
    return this.http.get(configUrl + _url).pipe(catchError(this.handleError));
  }
  //-----RETURNS ORG ID----------
  getOrgId(_page: string, formObj?:any) {
    let _orgId;
    if(_page == 'users' && formObj) // for user page, pass the selected organizationId from dropdown and append in req url
       _orgId = formObj['organisationId'];
    else
      _orgId = localStorage.getItem('orgId');
    return _orgId ? ( _orgId + '/' ) : '';
  }

  //-------------AFTER SIGNIN, FETCH ROLE------------------------- 
  getRoleApi(emailId: string, orgId: string) {
    return this.http
      .get(configUrl + orgId + '/users/' + emailId + '/role')
      .pipe(catchError(this.handleError));
  }
  //------------RETURNING HTTP REQUEST FOR POST------------

  postFormData(page: string, formData: object) {
    let _url =
      (this.pagesWithoutOrgID.includes(page) ? '' : this.getOrgId(page , formData)) +
      this.getCreateApi(page);
    return this.http
      .post(configUrl + _url, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // alert(error);
    return throwError('Something bad happened; please try again later.');
  }
}
