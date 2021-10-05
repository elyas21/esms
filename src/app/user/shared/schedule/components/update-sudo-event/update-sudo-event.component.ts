import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SudoSchedule } from 'src/app/model/SudoSchedule';
import { SudoScheduleService } from 'src/app/service/user/sudo-schedule.service';
import * as fromEventAction from '../../store/actions/event.actions';
import * as fromEventSelector from '../../store/selectors/event.selelctors';

@Component({
  selector: 'app-update-sudo-event',
  templateUrl: './update-sudo-event.component.html',
  styleUrls: ['./update-sudo-event.component.scss']
})
export class UpdateSudoEventComponent implements OnInit {
  SudoEvent: any;
  sudoEventForm: FormGroup;
  constructor(
    private sudoScheduleSer: SudoScheduleService,
    public dialogRef: MatDialogRef<UpdateSudoEventComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    console.log(this.data);
    this.sudoEventForm = this.fb.group({
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
    // this.SudoEvent = this.store.pipe(
    //   select(fromEventSelector.selectEntityById({ id: this.data.id }))
    // );
    // this.SudoEvent.subscribe(res => {
    //   this.sudoEventForm.setValue({
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
        this.SudoEvent = res;
        console.log(res);

        this.sudoEventForm.setValue({
          start: res.start,
          end: res.end,
          classType: res.classType,
          version: res.version,
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
    // this.sudoEventForm.value.start = this.sudoEventForm.value.start + ':00';
    // this.sudoEventForm.value.end = this.sudoEventForm.value.end + ':00';
    // console.log(this.sudoEventForm.value.start);
    // console.log(this.sudoEventForm.value.end);
    // this.sudoScheduleSer.create(this.model).subscribe(res => {
    //   console.log(res);
    //   s = 0;
    //   e = 0;
    // });
    this.store.dispatch(
      fromEventAction.updateEvent({
        event: { ...this.sudoEventForm.value, id: this.data.event.id }
      })
    );
    console.log({ ...this.sudoEventForm.value, id: this.data.event.id });

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
