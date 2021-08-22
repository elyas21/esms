import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistraService extends DataService {
  constructor(http: HttpClient, auth: AuthService) {
    super(`${environment.url}api/registara/`, http, auth);
  }
}
