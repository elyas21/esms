import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Role } from 'src/app/model/role.enum';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authFeatureKey);

export interface RoleLinksViewModal {
  role: string;
  isLoggedin: boolean;
}
export interface SchoolViewModal {
  schoolId: string;
}

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.userId != null
);
export const selectSchool = createSelector(selectAuthState, (state: fromAuth.State): string =>
  state.user.School ? state.user.School.schoolId : null
);
export const selectIsAdmin = createSelector(
  selectAuthState,
  (state: fromAuth.State): string => state.user.role
);

export const selectSchoolModel = createSelector(
  selectSchool,
  (school: string): SchoolViewModal => {
    return {
      schoolId: school
    };
  }
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
