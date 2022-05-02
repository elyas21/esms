import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../serivice/auth.service';
import * as fromAuthAction from '../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'Bnc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private store: Store<AppState>
  ) {
    // redirect to home if already logged in
    console.log('auth');
        if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    console.log('auth');
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.store.dispatch(
      fromAuthAction.AuthLogin({ userId: this.f.username.value, password: this.f.password.value })
    );
  }
}
