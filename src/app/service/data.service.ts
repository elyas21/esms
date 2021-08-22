import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { User } from '../model/User';
import { AuthService } from '../core/serivice/auth.service';

export class DataService {
  protected currentUser: User;

  constructor(protected url?: string, protected http?: HttpClient, protected autSer?: AuthService) {
    this.currentUser = this.autSer.currentUserValue;
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

  public create(resource) {
    console.log(this.url);
    resource.school = resource.school ? resource.school : this.currentUser.school;
    console.log(resource);
    return this.http.post(this.url + 'add', resource).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  update(resource) {
    resource.school = this.currentUser.school;
    return this.http.post(this.url + 'update', resource).pipe(
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
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }
}
