import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/director/`, http, auth);
  }

  getBySchool(id) {
    return this.http.get(this.url + 'get-one-by-school/' + '/' + id).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
}
