import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../core/serivice/auth.service';
import { User } from 'src/app/model/User';
import { ThemeService } from 'src/app/service/theme/theme.service';
import { Option } from 'src/app/service/theme/option.model';

@Component({
  selector: 'Bnc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  currentUser: User;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public authenticationService: AuthService,
    private readonly themeService: ThemeService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.themeService.setTheme('deeppurple-amber');
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }
}
