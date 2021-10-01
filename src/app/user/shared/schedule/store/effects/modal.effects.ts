import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';
import { AddWeeklyEventModalComponent } from '../../components/add-weekly-event-modal/add-weekly-event-modal.component';

@Injectable()
export class ModalEffects {
  //   closeModal$ = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(fromEventActions.addEventSuccess),
  //         tap(() => {
  //           return 'this.dialogRef.close()';
  //         })
  //       ),
  //     { dispatch: false }
  //   );

  constructor(
    private actions$: Actions,
    // private dialogRef: MatDialogRef<AddWeeklyEventModalComponent>
  ) {}
}
