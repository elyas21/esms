import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/school/`, http, auth, paginateSer, store);
  }
}
