import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { environment } from './../../../environments/environment';
import { PaginatedResult, Staff } from '../../model/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginateService } from '../paginate.service';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class StaffService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store: Store) {
    super(`${environment.url}api/staff/`, http, auth, paginateSer, store);
  }
  getPaginattedBySchool(url: string): Observable<PaginatedResult<Staff[]>> {
    const paginatedResult: PaginatedResult<Staff[]> = {
      result: undefined,
      pagination: undefined
    };
    return this.http
      .get<Staff[]>(url, { observe: 'response' })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;

          paginatedResult.pagination = this.paginateSer.parseReturnedPaginationUrls(
            response.headers.get('Link')
          );
          return paginatedResult;
        })
      );
  }
}
