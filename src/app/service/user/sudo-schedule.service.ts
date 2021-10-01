import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SudoScheduleService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/sudo-schedule/`, http, auth, paginateSer, store);
  }
}
