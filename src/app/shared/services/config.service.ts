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
  constructor(
    private http: HttpClient
  ) {
  }

  //----------RETURNS CORRESPONDING PAGE'S GETAPIS FROM PAGEINFO CONSTANT--------------
  getGetApi(page: string) {
    return this.pageInfo[page].getApis;
  }

  //-----------RETURNS CORRESPONSING PAGE'S POSTAPIS PAGEINFO CONSTANT-------------

  getCreateApi(page: string) {
    return this.pageInfo[page].postApis;
  }

  //----------APPENDING ORG ID FOR EVENT PAGE ONLY--------------

  getPreUrl(page: string, orgId?: number) {
    // prepends organization ID for event page, else : returns ''
    return orgId ? orgId + '/' : page == 'event' ? '0/' : '';
  }

  //------------RETURNING HTTP REQUEST FOR GET------------

  getAllData(page: string, orgId?: number) {
    var url = this.getPreUrl(page, orgId) + this.getGetApi(page);
    return this.http.get(configUrl + url).pipe(catchError(this.handleError));
  }

  //------------RETURNING HTTP REQUEST FOR POST------------

  postFormData(page: string, formData: object, orgId?: number) {
    var url = this.getPreUrl(page, orgId) + this.getCreateApi(page);
    return this.http
      .post(configUrl + url, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
