import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StaffActions from '../actions/staff.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StaffService } from 'src/app/service/user/staff.service';
import { PaginatedResult } from 'src/app/model/User';
@Injectable()
export class StaffEffects {
  /****************************************************************** */
  /*****LOAD STAFFS API EFFECT ** */
  /****************************************************************** */
  loadStaffs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StaffActions.loadStaffs),
      mergeMap(action =>
        this.staffSer.getAllBySchool().pipe(
          // this.staffSer.getPaginattedBySchool(action.url).pipe(
          map(data => {
            return StaffActions.loadStaffsSccess({ staffs: data });
          }),
          catchError(error => of(StaffActions.loadStaffsFaliur({ error })))
        )
      )
    );
  });

  /****************************************************************** */
  /*****CREATE STAFF API EFFECT ** */
  /****************************************************************** */
  createStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StaffActions.addStaff),
      mergeMap(action => {
        console.log(action.staff);
        return this.staffSer.create(action.staff).pipe(
          map(staff => StaffActions.addStaffSuccess({ staff })),
          catchError(error => of(StaffActions.addStaffFailure({ error: error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private staffSer: StaffService) {}
}
