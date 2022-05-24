import { Action, createReducer, on } from '@ngrx/store';
import { NewUser } from 'src/app/model/User';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: NewUser;
  error: any;
}

export const initialState: State = {
  user: {
    userId: null,
    firstName: null,
    middleName: null,
    lastName: null,
    id: null,
    role: null,
    schoolName: null,
    School: null,
    googleId: null
  },
  error: null
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.AuthLoginSuccess, AuthActions.BrowserReload, (state, action) => {
    return {
      user: action.user,
      error: null
    };
  }),
  on(AuthActions.AuthLoginFailure, (state, action) => {
    return {
      user: {
        userId: null,
        firstName: null,
        middleName: null,
        lastName: null,
        id: null,
        role: null,
        schoolName: null,
        School: null,
        googleId: null
      },
      error: action.error
    };
  }),
  on(AuthActions.LogoutSuccess, (state, action) => {
    return {
      user: null,
      error: null
    };
  }),
  on(AuthActions.AuthLoginFailure, (state, action) => {
    return {
      user: state.user,
      error: action.error
    };
  }),
  on(AuthActions.Logout, (state, action) => {
    return {
      ...state,
      user: {
        userId: null,
        firstName: null,
        middleName: null,
        lastName: null,
        id: null,
        role: null,
        schoolName: null,
        School: null,
        googleId: null
      },
      error: null
    };
  })
);
