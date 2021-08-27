import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Role } from 'src/app/model/role.enum';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authFeatureKey);

export interface RoleLinksViewModal {
  role: string;
  isLoggedin: boolean;
}

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.userId != null
);
export const selectIsAdmin = createSelector(
  selectAuthState,
  (state: fromAuth.State): string => state.user.role
);

export const selectAuthLinksViewModel = createSelector(
  selectIsAdmin,
  selectIsLoggedIn,
  (role: string, isLoggedIn: boolean): RoleLinksViewModal => {
    return {
      role,
      isLoggedin: isLoggedIn
    };
  }
);
