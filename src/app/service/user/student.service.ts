import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { Student } from 'src/app/model/Student';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/student/`, http, auth, paginateSer, store);
  }

  getAllPaginated(pageSize, page) {
    return this.http
      .get(
        this.url + 'get-all-by-school-pg/' + this.currentUser.school + '/' + pageSize + '/' + page
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  getAllBySchoolGradeClassYear(id): Observable<Student[]> {
    console.log(id);
    return this.http
      .get<Student[]>(
        this.url +
          'get-all-by-school/' +
          this.currentUser.school +
          '/' +
          id +
          '/' +
          this.currentUser.School.lastClassYear
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  secAssign(resource) {
    resource.currentClassYear = this.currentUser.School.currentClassYear;
    return this.http.post(this.url + 'assignToSection', resource).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
  getallRegisterdStudentsByGradeClassYear(grade): Observable<Student[]> {
    console.log(grade);
    return this.http
      .get<Student[]>(
        this.url +
          'get-all-registerd-by-grade-school/' +
          this.currentUser.school +
          '/' +
          grade +
          '/' +
          this.currentUser.School.currentClassYear
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  removeSectionAssign(stu) {
    stu.currentClassYear = this.currentUser.School.currentClassYear;
    return this.http.post(this.url + 'removeFromSection', stu).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
}
