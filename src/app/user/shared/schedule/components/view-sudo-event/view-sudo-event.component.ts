import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SudoSchedule } from 'src/app/model/SudoSchedule';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';
import * as fromEventAction from '../../store/actions/event.actions';
import * as fromEventSelector from '../../store/selectors/event.selelctors';
import { faEdit, faUndo, faBackward } from '@fortawesome/free-solid-svg-icons';
import { UpdateSudoEventComponent } from '../update-sudo-event/update-sudo-event.component';

@Component({
  selector: 'app-view-sudo-event',
  templateUrl: './view-sudo-event.component.html',
  styleUrls: ['./view-sudo-event.component.scss']
})
export class ViewSudoEventComponent implements OnInit {
  SudoEvents: Observable<any>;
  tosend = { edit: false, id: null };
  font = {
    edit: faEdit,
    cancle: faUndo,
    back: faBackward
  };
  constructor(
    private sudoScheduleSer: SudoScheduleService,
    public dialogRef: MatDialogRef<ViewSudoEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    public dialog: MatDialog
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {
    // this.store.dispatch(fromEventAction.loadEvent({ id: '5' }));
    this.SudoEvents = this.data.data;
  }

  async editEvent(id) {
    // this.tosend = { edit: true, id: id };
    // console.log(this.tosend);
    // await this.dialogRef.close();
    this.OpenEditorDilalog(this.data.data);
  }

  OpenEditorDilalog(result) {
    let df;
    df = this.dialog.open(UpdateSudoEventComponent, {
      data: { event: result },
      height: '100vh',
      width: '100vh'
      // position: {
      //   top: "0",
      //   left: "0"
      // }
    });

    df.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      // tobeupdate ture
      console.log(result);
      // this.dialog.closeAll()
      if (result) {
        // if edit true passed pass to edit
        // if close true close the dialog
        // return this.store.dispatch(fromSudoScheduleAction.updateEvent({ event: result.event }));
        // df.close()
      }
      this.dialog.closeAll()
    });
  }
}
