import { createAction, props } from '@ngrx/store';
import { Staff } from 'src/app/model/User';

export const loadStaffs = createAction('[Products List Component] Load Products');

export const loadStaffsSccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ staffs: Staff[] }>()
);
export const loadStaffsFaliur = createAction(
  '[Staff View Componet] Loadd Faliur Staffs',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL STAFF ** */
/****************************************************************** */

export const addStaff = createAction('[Staff Add Component] Add Staff', props<{ staff: Staff }>());

export const addStaffSuccess = createAction(
  '[Staff Effect] Add Staff Success',
  props<{ staff: Staff }>()
);

export const addStaffFailure = createAction(
  '[Staff Effect] Add Staff Failure',
  props<{ error: any }>()
);
