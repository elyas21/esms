import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradeService extends DataService {
  constructor(http: HttpClient, auth: AuthService) {
    super(`${environment.url}api/grade/`, http, auth);
  }

  getOneBySchoolGrade(id) {
    return this.http
      .get(this.url + 'get-one-by-school-grade/' + this.currentUser.school + '/' + id)
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  assGradeCourse(data) {
    return this.http.post(this.url + 'ass-course-grade', data).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  getCourseList(grade) {
    return this.http
      .get(this.url + 'get-all-course-by-school-grade/' + this.currentUser.school + '/' + grade)
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
}
