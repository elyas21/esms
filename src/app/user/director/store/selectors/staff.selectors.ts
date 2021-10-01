import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Staff } from 'src/app/model/User';
import * as StaffReducer from '../reducers/staff.reducer';

export const selectProductState = createFeatureSelector<StaffReducer.State>(
  StaffReducer.stafvesFeatureKey
);
export const selectProducts = createSelector(
  selectProductState,
  state => state[StaffReducer.stafvesFeatureKey].staffs
);

export const selectAllEntites = createSelector(selectProductState, state => {
  console.log(state);
  return StaffReducer.selectAll;
});
export interface StaffTableViewModel {
  Id: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Role: string;
}

// export const selectStaffViewModel = createSelector(
//   selectProductState,
//   (state: StaffReducer.State): StaffTableViewModel => {
//     return {
//         Id: StaffReducer.selectEntities[id]
//         FirstName: string;
//         MiddleName: string;
//         LastName: string;
//         Role: string;
//     };
//   }
// );
export const selectAllEntities = createSelector(selectAllEntites, staffs =>
  // staffs.map(a => {
  // return {
  //   Id: a.staffId,
  //   FirstName: a.staffId,
  //   MiddleName: a.staffId,
  //   LastName: a.staffId,
  //   Role: a.staffId
  // };
  // })
  {
    return staffs;
  }
);
