import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SudoSchedule } from 'src/app/model/SudoSchedule';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';
// import * as fromEventAction from '../../store/actions/sudoevent.actions';
import * as fromEventAction from '../../store/actions/event.actions';

@Component({
  selector: 'app-add-weekly-event-modal',
  templateUrl: './add-weekly-event-modal.component.html',
  styleUrls: ['./add-weekly-event-modal.component.scss']
})
export class AddWeeklyEventModalComponent implements OnInit {
  start = '04:43';
  end = '06:00';
  sudoScheduleForm: FormGroup;
  constructor(
    private sudoScheduleSer: SudoScheduleService,
    public dialogRef: MatDialogRef<AddWeeklyEventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private fb: FormBuilder
  ) {
    console.log(this.data);

    this.sudoScheduleForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      classType: ['', Validators.required],
      date: [this.data.date, Validators.required],
      day: ['3', Validators.required],
      section: [this.data.sectionId, Validators.required],
      version: ['3.32.3', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  dateChange(){

    let date = new Date(this.sudoScheduleForm.controls['date'].value);
    let end = date.getDay()
    this.sudoScheduleForm.controls['day'].setValue(end);

  }
  public Days = [
    { value: 0, name: 'Sun' },
    { value: 1, name: 'Mon' },
    { value: 2, name: 'Tus' },
    { value: 3, name: 'Wen' },
    { value: 4, name: 'Thu' },
    { value: 5, name: 'Fri' },
    { value: 6, name: 'Sat' }
  ];
  // public model = new SudoSchedule('online', this.start, this.end, 2);
  submitted = false;

  onSubmit() {
    this.submitted = true;
    let s, e;
    console.log(this.start);
    console.log(this.end);
    // if (this.model.start) {
    //   s =
    //     this.model.start.slice(5, 7) == 'AM'
    //       ? this.model.start.slice(0, 4) + ':00'
    //       : (parseInt(this.model.start.slice(0, 2)) +this.model.end.slice(2,4) + 12).toString() + ':00';
    // }
    // if (this.model.end) {
    //   e =
    //     this.model.end.slice(5, 7) == 'AM'
    //       ? this.model.end.slice(0, 4) + ':00'
    //       : (parseInt(this.model.end.slice(0, 2)) + 12).toString() +this.model.end.slice(2,4) + ':00';
    // }
    this.sudoScheduleForm.value.start = this.sudoScheduleForm.value.start + ':00';
    this.sudoScheduleForm.value.end = this.sudoScheduleForm.value.end + ':00';
    console.log(this.sudoScheduleForm.value.start);
    console.log(this.sudoScheduleForm.value.end);
    // this.sudoScheduleSer.create(this.model).subscribe(res => {
    //   console.log(res);
    //   s = 0;
    //   e = 0;
    // });
    this.store.dispatch(fromEventAction.UpsertEvent({ event: this.sudoScheduleForm.value }));
    this.dialogRef.close();
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.sudoScheduleForm);
  }
}
