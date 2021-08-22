import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SemisterService extends DataService {
  constructor(http: HttpClient, auth: AuthService) {
    super(`${environment.url}api/semister/`, http, auth);
  }
}
