import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { DataService } from '../data.service';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { attd } from 'src/app/user/student/com/attendance/attendance.component';
import { Store } from '@ngrx/store';
import { PaginateService } from '../paginate.service';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService extends DataService {
  constructor(http: HttpClient, auth: AuthService, paginateSer: PaginateService, store?: Store) {
    super(`${environment.url}api/attendance/`, http, auth, paginateSer, store);
  }

  getAttendaceBySectionDayClassYear(section, month, day): Observable<any> {
    console.log(this.autSer.currentUserValue.school);

    console.log(this.autSer.currentUserValue.School.currentClassYear);

    console.log(section);

    console.log(month);
    console.log(day);
    return this.http
      .get<any>(
        this.url +
          'get-all-by/' +
          this.autSer.currentUserValue.school +
          '/' +
          this.autSer.currentUserValue.School.currentClassYear +
          '/' +
          section +
          '/' +
          month +
          '/' +
          day
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
  getAllByMonth(student, section, month): Observable<attd> {
    return this.http
      .get<attd>(
        this.url +
          'get-all-by/' +
          this.autSer.currentUserValue.school +
          '/' +
          section +
          '/' +
          student +
          '/' +
          month
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }
}
