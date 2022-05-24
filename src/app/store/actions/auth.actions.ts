import { createAction, props } from '@ngrx/store';
import { NewUser } from 'src/app/model/User';

export const AuthLogin = createAction(
  '[Auth Component] AuthLogin User',
  props<{ userId: string; password: string }>()
);

export const AuthLoginSuccess = createAction(
  '[Auth Component] AuthLogin Success',
  props<{ user: NewUser }>()
);

export const AuthLoginFailure = createAction(
  '[Auth Component] AuthLogin Failure',
  props<{ error: any }>()
);
export const BrowserReload = createAction(
  '[Loign componet] Browser Reload',
  props<{ user: NewUser }>()
);

export const Logout = createAction('[Nav Component] Logout User');

export const LogoutSuccess = createAction(
  '[Auth Component] AuthLogOut Success'
);



export const LogoutFailure = createAction(
  '[Auth Component] AuthLogout Failure',
  props<{ error: any }>()
);