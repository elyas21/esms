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
export class CourseSecLecAssService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/teacher-section-coures-ass/`, http, auth, paginateSer, store);
  }

  getAllBySchoolGrade(id) {
    return this.http
      .get(this.url + 'get-all-by-school-section/' + this.currentUser.school + '/' + id)
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  assCourseGrade(data) {
    return this.http.post(this.url + 'add-course', data).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  // get-all-by-school-section-by-lecture/:school/:lecture
  getAllSectionsByLecture(id) {
    return this.http.get(
      this.url + 'get-all-by-school-section-by-lecture/' + this.currentUser.school + '/' + id
    );
  }
  getAllCoursesBySectionLecture(id, section) {
    return this.http.get(
      this.url +
        'get-all-courses-by-school-section-by-lecture/' +
        this.currentUser.school +
        '/' +
        id +
        '/' +
        section
    );
  }
}
