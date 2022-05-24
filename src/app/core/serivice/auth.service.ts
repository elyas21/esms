import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/User';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public currentGoogleUserSubject: BehaviorSubject<any>;
  public currentGoogleUser: Observable<any>;

  constructor(private http: HttpClient) {
    
    
    this.currentGoogleUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentGoogleUser'))
    );

    this.currentGoogleUser = this.currentGoogleUserSubject.asObservable();





    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();






  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get currentGoogleUserValue(): User {
    return this.currentGoogleUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.url}api/auth/login`, {
        userId: username,
        password
      })
      .pipe(
        map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    // this.currentGoogleUserSubject.next(null);

    this.currentUserSubject.next(null);
    this.currentGoogleUserSubject.next(null);

    return this.http
      .get<any>(`${environment.url}api/auth/logout`)
      .pipe(
        map(msg => {
          return msg;
        })
      );
  }
  savegoogleUser(user) {
    localStorage.setItem('currentGoogleUser', JSON.stringify(user));
    this.currentGoogleUserSubject.next(user);
  }
}
