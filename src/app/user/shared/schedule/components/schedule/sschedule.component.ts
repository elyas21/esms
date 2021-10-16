import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GradeService } from 'src/app/service/user/grade.service';
import { SectionService } from 'src/app/service/user/section.service';
import { AddWeeklyEventModalComponent } from '../add-weekly-event-modal/add-weekly-event-modal.component';
import * as fromSudoScheduleAction from '../../store/actions/sudoevent.actions';
import * as fromSudoScheduleSelector from '../../store/selectors/sudoevent.selelctors';
import { filter, map } from 'rxjs/operators';
import { ViewSudoEventComponent } from '../view-sudo-event/view-sudo-event.component';
import { UpdateSudoEventComponent } from '../update-sudo-event/update-sudo-event.component';
@Component({
  selector: 'app-sschedule',
  templateUrl: './sschedule.component.html',
  styleUrls: ['./sschedule.component.scss']
})
export class SScheduleComponent implements OnInit {
  subscription: Subscription;
  grades;
  sections;
  grades$: Observable<any>;
  sections$: Observable<any>;
  events$: Observable<fromSudoScheduleSelector.EventsViewModel[]>;

  ScheduleList;
  constructor(
    private gradeSer: GradeService,
    private secSer: SectionService,
    private store: Store,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.grades = res;
      // console.log(this.grades);
    });
    this.store.dispatch(fromSudoScheduleAction.loadEvents({ section: 'sec-1-0-3-b' }));
    // this.store.dispatch(fromGradeAction.loadGrades());
    this.events$ = this.store.pipe(select(fromSudoScheduleSelector.selectEventViewModel));
    this.events$.subscribe(res => (this.ScheduleList = res));
    // console.log(this.ScheduleList);
  }
  getEventByDay(id): Observable<fromSudoScheduleSelector.EventsViewModel[]> {
    return this.events$.pipe(
      map(x => {
        let d = [];
        x.forEach(element => {
          if (element.day == id) {
            d.push(element);
          }
        });
        // console.log(d);

        return d;
      })
    );
  }
  openDialog() {
    this.dialog.open(AddWeeklyEventModalComponent, {
      data: { data: 'data' },
      height: '500px',
      width: '700px'
    });
  }

  openViewDialog(id) {
    let dff;
    this.store
      .pipe(select(fromSudoScheduleSelector.selectEntityById({ id: id })))
      .subscribe(res => {
      console.log(res);
      
        dff = this.dialog.open(ViewSudoEventComponent, {
          data: { data: res },
          height: '300px',
          width: '420px'
        });
      }
      );
        return dff.afterClosed().subscribe(result => {
          // console.log(`Dialog result: ${result}`); // Pizza!
          // if (result.edit) {
          //   // if edit true passed pass to edit
          //   // if close true close the dialog
          //   console.log(result);

          //   // return this.OpenEditorDilalog(result);
          //   result = null;
          // }
          // this.dialog.closeAll()
        });
  }
  // OpenEditorDilalog(result) {
  //   let df;
  //   df = this.dialog.open(UpdateSudoEventComponent, {
  //     data: { event: result },
  //     height: '500px',
  //     width: '420px'
  //   });

  //   return df.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`); // Pizza!
  //     // tobeupdate ture
  //     console.log(result);

  //     if (result) {
  //       // if edit true passed pass to edit
  //       // if close true close the dialog
  //       // return this.store.dispatch(fromSudoScheduleAction.updateEvent({ event: result.event }));
  //       // df.close()
  //     }
  //   });
  // }
  getSections(id) {
    this.secSer.getAllBySchoolGradeClassYear(id).subscribe(res => {
      this.sections = res;
      // console.log(this.sections);
    });
  }
  getSectionss(id) {
    // this.store.dispatch(fromSectionAction.loadSections({ id: id }));
    // this.sections$ = this.store.pipe(select(fromSectionSelector.selectIsLoggedIn));
  }
  getSchedule(sectionId) {
    // console.log(sectionId);
  }
  getRow(i) {
    let time = new Date(i);
    let hours = time.getHours();
    hours = hours >= 12 ? hours - 12 : hours;
    let minuts = time.getMinutes();
    let totalMins = hours * 60 + minuts;
    let ret = (totalMins * 66) / 720;
    // hours = hours == 0 ? 1 : hours;
    // console.log(time);
    // console.log(hours);
    // console.log(minuts);
    // console.log(totalMins);
    // console.log(ret);

    return ret;
  }
  getRowEnd(start, end) {
    let startT = this.getRow(start);
    let endT = this.getRow(end);
    startT = startT == 0 ? 1 : startT;
    let sstartT = Math.round(startT).toString();
    let sendT = Math.round(endT).toString();
    // console.log(`${sstartT} / ${sendT}`);
    return `${sstartT}  /  ${sendT}`;
  }
}
