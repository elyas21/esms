import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SectionActions from '../actions/section.actions';
import { SectionService } from 'src/app/service/user/section.service';

@Injectable()
export class SectionEffects {
  loadSections$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SectionActions.loadSections),
      concatMap(action =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        {
          console.log(action);
          return this.secService.getAllBySchoolGradeClassYear(action.id).pipe(
            map(data => SectionActions.loadSectionsSuccess({ sections: data })),
            catchError(error => of(SectionActions.loadSectionsFailure({ error })))
          );
        }
      )
    );
  });

  constructor(private actions$: Actions, private secService: SectionService) {}
}
