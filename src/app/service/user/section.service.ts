import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';
import { Observable } from 'rxjs';
import { Section } from 'src/app/model/Section';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/section/`, http, auth, paginateSer, store);
  }
  getAllBySchoolClassYear() {
    return this.http
      .get(
        this.url +
          'get-all-by-school/' +
          this.currentUser.school +
          '/' +
          this.currentUser.School.currentClassYear
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  getOneBySchoolClassYear(id) {
    return this.http
      .get(
        this.url +
          'get-one-by-school/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          this.currentUser.School.currentClassYear
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  getAllBySchoolGradeClassYear(id): Observable<Section[]> {
    return this.http
      .get<Section[]>(
        this.url +
          'get-all-by-school/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          this.currentUser.School.currentClassYear
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  getAllBySchoolGrade(id) {
    return this.http
      .get(this.url + 'get-all-by-school-grade/' + this.currentUser.school + '/' + id)
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
}
