import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { User } from '../model/User';
import { AuthService } from '../core/serivice/auth.service';
import { PaginateService } from './paginate.service';
import { select, Store } from '@ngrx/store';
import * as fromAuthSelectors from '../store/selectors/auth.selectors';

export class DataService {
  protected currentUser: User;
  protected school: fromAuthSelectors.SchoolViewModal;
  constructor(
    protected url?: string,
    protected http?: HttpClient,
    protected autSer?: AuthService,
    public paginateSer?: PaginateService,
    private store?: Store
  ) {
    this.currentUser = this.autSer.currentUserValue;
    this.store.pipe(select(fromAuthSelectors.selectSchoolModel)).subscribe(res => {
      this.school = res;
    });
  }
  getOneBySchool(id) {
    return this.http.get(this.url + 'get-one-by-school/' + this.currentUser.school + '/' + id).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  getOneBySchoolClassYear(id) {
    return this.http
      .get(
        this.url +
          'get-one-by-school-classYear/' +
          this.currentUser.school +
          '/' +
          this.currentUser.School.currentClassYear +
          '/' +
          id
      )
      .pipe(
        map(response => response),
        catchError(err => this.handleError(err))
      );
  }

  getAllBySchool(): Observable<any> {
    return this.http.get<any>(this.url + 'get-all-by-school/' + this.currentUser.school).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
  getAllBySchoolSection(section): Observable<any> {
    return this.http
      .get<any>(this.url + 'get-all-by-school-section/' + this.currentUser.school + '/' + section)
      .pipe(
        map(res => res),
        catchError(err => this.handleError(err))
      );
  }
  getAll() {
    return this.http.get(this.url + 'getAll').pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  get(id) {
    return this.http.get(this.url + 'get-one/' + id).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
  getOneById(id): Observable<any> {
    return this.http.get<any>(this.url + 'get-one/' + id).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  public create(resource: any): Observable<any> {
    let a = { ...resource, school: this.school.schoolId };
    console.log(a);
    return this.http.post(this.url + 'add', a).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  update(resource): Observable<any> {
    let a = { ...resource, school: this.school.schoolId };
    return this.http.post<any>(this.url + 'update', a).pipe(
      map(response => response),
      catchError(err => of(null))
    );
  }

  delete(id) {
    console.log(id);
    return this.http.delete(this.url + 'remove/' + id).pipe(
      map(response => response),
      catchError(err => of(null))
    );
    // .map(response => response.json())
    // .toPromise()
    // .catch(this.handleError);
  }

  protected handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
