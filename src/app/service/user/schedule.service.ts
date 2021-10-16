import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/event/`, http, auth, paginateSer, store);
  }

  bulkAddEvent(resource): Observable<any> {
    let a = { ...resource, school: this.school.schoolId };
    console.log(a);
    return this.http.post(this.url + 'add-bulk', a).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
}
