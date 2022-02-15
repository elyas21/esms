import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { ScheduleService } from 'src/app/service/user/schedule.service';
import { UpdateEventComponent } from '../update-event/update-event.component';
import * as fromEventAction from '../../store/actions/event.actions';
import * as fromEventSelector from '../../store/selectors/event.selectors';

@Component({
  selector: 'app-update-weekly-event',
  templateUrl: './update-weekly-event.component.html',
  styleUrls: ['./update-weekly-event.component.scss']
})
export class UpdateWeeklyEventComponent implements OnInit {

  Event: any;
  EventForm: FormGroup;
  constructor(
    private ScheduleSer: ScheduleService,
    public dialogRef: MatDialogRef<UpdateWeeklyEventComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    console.log(this.data);
    this.EventForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      classType: ['', Validators.required],
      day: ['3', Validators.required],
      section: ['sec-1-0-3-b', Validators.required],
      version: ['3.32.3', Validators.required]
    });
  }
  model: any;
  submitted = false;
  ngOnInit(): void {
    // this.Event = this.store.pipe(
    //   select(fromEventSelector.selectEntityById({ id: this.data.id }))
    // );
    // this.Event.subscribe(res => {
    //   this.EventForm.setValue({
    //     start: res.start,
    //     end: res.end,
    //     classType: res.classType,
    //     version: res.version,
    //     section: res.version,
    //     day: res.day
    //   });
    // });

    this.store
      .pipe(select(fromEventSelector.selectEntityById({ id: this.data.event.id })))
      .subscribe(res => {
        this.Event = res;
        console.log(res);

        this.EventForm.setValue({
          start: res.start,
          end: res.end,
          classType: res.classType,
          version: 'null',
          section: res.section,
          day: res.day
        });
      });
  }
  // onSubmint() {
  //   this.store.dispatch(fromEventAction.upsertEvent({ event: this.model }));
  // }
  onSubmit() {
    this.submitted = true;
    let s, e;
    // console.log(this.start);
    // console.log(this.end);
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
    // this.EventForm.value.start = this.EventForm.value.start + ':00';
    // this.EventForm.value.end = this.EventForm.value.end + ':00';
    // console.log(this.EventForm.value.start);
    // console.log(this.EventForm.value.end);
    // this.ScheduleSer.create(this.model).subscribe(res => {
    //   console.log(res);
    //   s = 0;
    //   e = 0;
    // });
    this.store.dispatch(
      fromEventAction.updateEvent({
        event: { ...this.EventForm.value, id: this.data.event.id }
      })
    );
    console.log({ ...this.EventForm.value, id: this.data.event.id });

    // this.dialogRef.close();
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
}
