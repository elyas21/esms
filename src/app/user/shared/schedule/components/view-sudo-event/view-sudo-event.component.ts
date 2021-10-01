import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SudoSchedule } from 'src/app/model/SudoSchedule';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';
import * as fromEventAction from '../../store/actions/event.actions';
import * as fromEventSelector from '../../store/selectors/event.selelctors';
import { faEdit, faUndo, faBackward } from '@fortawesome/free-solid-svg-icons';

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
    private store: Store
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {
    // this.store.dispatch(fromEventAction.loadEvent({ id: '5' }));
    this.SudoEvents = this.data.data;
  }

  editEvent(id) {
    this.tosend = { edit: true, id: id }
    console.log(this.tosend)
    this.dialogRef.close(this.tosend);
  }
}
