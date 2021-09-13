import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pagination, Staff } from 'src/app/model/User';
import * as StaffActions from '../actions/staff.actions';

export const stafvesFeatureKey = 'stafves';

export interface State extends EntityState<Staff> {
  // additional entities state properties

  error: any;
}

export const adapter: EntityAdapter<Staff> = createEntityAdapter<Staff>({
  selectId: (staff: Staff) => staff.staffId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null
});

export const reducer = createReducer(
  initialState,

  on(StaffActions.loadStaffsSccess, (state, action) => adapter.setAll(action.staffs, state)),

  on(StaffActions.loadStaffsFaliur, StaffActions.addStaffFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),

  on(StaffActions.addStaffSuccess, (state, action) => {
    console.log(state);
    console.log(action);
    return adapter.addOne(action.staff, state);
  })
  // on(StaffActions.addStaff,
  //   (state, action) => adapter.addOne(action.staff, state)
  // ),
  // on(StaffActions.upsertStaff,
  //   (state, action) => adapter.upsertOne(action.staff, state)
  // ),
  // on(StaffActions.addStaffs,
  //   (state, action) => adapter.addMany(action.staffs, state)
  // ),
  // on(StaffActions.upsertStaffs,
  //   (state, action) => adapter.upsertMany(action.staffs, state)
  // ),
  // on(StaffActions.updateStaff,
  //   (state, action) => adapter.updateOne(action.staff, state)
  // ),
  // on(StaffActions.updateStaffs,
  //   (state, action) => adapter.updateMany(action.staffs, state)
  // ),
  // on(StaffActions.deleteStaff,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(StaffActions.deleteStaffs,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(StaffActions.loadStaffs,
  //   (state, action) => adapter.setAll(action.staffs, state)
  // ),
  // on(StaffActions.clearStaffs,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// export function sortByName(a: Staff, b: Staff): number {
//   return a.staffFirstName.localeCompare(b.staffFirstName);
// }
