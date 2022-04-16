import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../core/serivice/auth.service';
import { NewUser, User } from 'src/app/model/User';
import { ThemeService } from 'src/app/service/theme/theme.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Option } from 'src/app/service/theme/option.model';
import {
  selectAuthLinksViewModel,
  RoleLinksViewModal,
  GRoleLinksViewModal,
  gselectAuthLinksViewModel
} from 'src/app/store/selectors/auth.selectors';
import { select, Store } from '@ngrx/store';
import { BrowserReload, Logout } from 'src/app/store/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'Bnc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  vm$: Observable<RoleLinksViewModal>;
  Gvm$: Observable<GRoleLinksViewModal>;
  currentUser: User;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public authenticationService: AuthService,
    private readonly themeService: ThemeService,
    private authSer: AuthService,
    private store: Store,
    private http: HttpClient
  ) {
    // this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  logout() {
    this.store.dispatch(Logout());
    this.authSer.logout();
  }

  ngOnInit() {
    const user: NewUser = JSON.parse(localStorage.getItem('currentUser'));

    console.log(user);
    if (user) {
      this.store.dispatch(BrowserReload({ user }));
    }

    this.vm$ = this.store.pipe(select(selectAuthLinksViewModel));
    this.Gvm$ = this.store.pipe(select(gselectAuthLinksViewModel));

    this.themeService.setTheme('deeppurple-amber');
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  naviageToGoogleLogin() {
    // window.location.href=environment.hostname+'google';
    console.log(environment.hostname + 'api/test');

    (window as any).open(environment.hostname + 'api/auth/google', '_self');

    const headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + localStorage.getItem('current_user')['token'])
      .append('Content-type', 'application/json');
    const httpOptions = {
      headers
    };
    const externalUrl =  '/api/auth/google';
    const dataToPut = 'Usually, it will be an object, not a string';

    this.http.post<any>(externalUrl, dataToPut, httpOptions).subscribe(res => {});
  }
}
