import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGradeingService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/course-gradeing/`, http, auth);
  }
  // course-gradeing/get-all-student-by-school/:school/:lecture/:course/:section

  getStusGrading(id, course, section) {
    return this.http
      .get(
        this.url +
          'get-all-student-by-school/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          course +
          '/' +
          section
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  getStusGradingByterm(id, course, section, term) {
    return this.http
      .get(
        this.url +
          'get-all-student-by-school-term/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          course +
          '/' +
          section +
          '/' +
          term
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  getGradeBySchoolStuClassYearTerm(id, term, classYear?) {
    return this.http
      .get(
        this.url +
          'get-grade-by-school-term-classYear-id/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          classYear +
          '/' +
          term
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  getAllBySchoolSectionTerm(section, term, course) {
    return this.http
      .get(
        this.url +
          'get-all-student-by-school-section-term-course/' +
          this.currentUser.school +
          '/' +
          section +
          '/' +
          term +
          '/' +
          course
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
}
