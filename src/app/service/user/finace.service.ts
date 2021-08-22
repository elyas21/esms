import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinaceService extends DataService {
  constructor(http: HttpClient, auth: AuthService) {
    super(`${environment.url}api/finace/`, http, auth);
  }
}
