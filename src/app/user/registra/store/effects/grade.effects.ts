import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as GradeActions from '../actions/grade.actions';
import { GradeService } from 'src/app/service/user/grade.service';

@Injectable()
export class GradeEffects {
  loadGrades$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GradeActions.loadGrades),
      concatMap(action =>
        this.gradeSer.getAllBySchool().pipe(
          map(data => {
            return GradeActions.loadGradesSuccess({ grades: data });
          }),
          catchError(error => of(GradeActions.loadGradesFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private gradeSer: GradeService) {}
}
