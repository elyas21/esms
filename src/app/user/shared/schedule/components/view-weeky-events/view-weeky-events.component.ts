import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { ScheduleService } from 'src/app/service/user/schedule.service';
import * as fromEventAction from '../../store/actions/event.actions';
import { UpdateWeeklyEventComponent } from '../update-weekly-event/update-weekly-event.component';

@Component({
  selector: 'app-view-weeky-events',
  templateUrl: './view-weeky-events.component.html',
  styleUrls: ['./view-weeky-events.component.scss']
})
export class ViewWeekyEventsComponent implements OnInit {
  Event$;
  constructor(
    private sudoScheduleSer: ScheduleService,
    public dialogRef: MatDialogRef<ViewWeekyEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    public dialog: MatDialog
  ) {
    console.log(this.data);

  }


  ngOnInit(): void {
    this.Event$ = this.data.data
    console.log(this.Event$);
    
  }

  async editEvent(id) {
    // this.tosend = { edit: true, id: id };
    // console.log(this.tosend);
    // await this.dialogRef.close();
    this.OpenEditorDilalog(this.data.data);
  }

  OpenEditorDilalog(result) {
    let df;
    df = this.dialog.open(UpdateWeeklyEventComponent, {
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
      this.dialog.closeAll();
    });
  }

  removeEvent(id) {
    this.dialog.closeAll();
    console.log('rrrrrrr');
    
    this.store.dispatch(fromEventAction.deleteEvent({ id: id }));
  }
}
