import { Component, OnDestroy, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as eventsAction from '../../store/actions/event.actions';
import * as eventsSelector from '../../store/selectors/event.selectors';
import { VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-event',
  templateUrl: './weekly-event.component.html',
  styleUrls: ['./weekly-event.component.scss']
})
export class WeeklyEventComponent implements OnDestroy, OnInit {
  weekRange = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required)
  });

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  startDateSelection() {
    console.log(this.range.controls['start'].value);
    let start = new Date(this.range.controls['start'].value);
    start.setDate(start.getDate() - start.getDay());
    this.range.controls['start'].setValue(start);
  }
  endDateSelection() {
    let start = new Date(this.range.controls['start'].value);
    let end = new Date(start);
    end.setDate(start.getDate() + 6);
    this.range.controls['end'].setValue(end);
  }
  lastStart;
  sectionId: string;
  startDate: string;
  endDate: string;
  sub;
  constructor(private route: ActivatedRoute, private store: Store) {}
  weeklyEvents$: Observable<any>;
  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.sectionId = params.get('section'); // (+) converts string 'id' to a number
      this.startDate = params.get('start'); // (+) converts string 'id' to a number
      this.endDate = params.get('end'); // (+) converts string 'id' to a number
      console.log(this.sectionId);
      console.log(params.get('section'));

      this.store.dispatch(
        eventsAction.loadWeeklyEvents({
          section: this.sectionId,
          range: { start: this.startDate, end: this.endDate }
        })
      );
      // In a real app: dispatch action to load the details here.
      // this.store.dispatch(fromSudoScheduleAction.loadEvents({ section: this.sectionId }));
    });

    // // this.store.dispatch(fromGradeAction.loadGrades());
    this.weeklyEvents$ = this.store.pipe(select(eventsSelector.selectEventViewModel));
    this.weeklyEvents$.subscribe(res => {
      console.log(res);
    });
  }

  getEventByDay(id): Observable<eventsSelector.EventsViewModel[]> {
    return this.weeklyEvents$.pipe(
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

  getRow(i) {
    let time = new Date(`2021-09-11T${i}+03:00`);

    let hours = time.getHours();
    hours = hours >= 12 ? hours - 12 : hours;
    let minuts = time.getMinutes();
    let totalMins = hours * 60 + minuts;
    let ret = (totalMins * 66) / 720;
    hours = hours == 0 ? 1 : hours;
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

  SelectWeek() {
    if (this.lastStart == this.weekRange.value.start) {
      this.weekRange.setValue({
        end: WeekStart(this.weekRange.value.start),
        start: WeekStart(this.weekRange.value.start)
      });
      this.lastStart = this.weekRange.value.start;
    }
  }

  onSelect() {
    console.log('seleted');
    alert('ok');
  }
  ngOnDestroy(): void {
    this.store.dispatch(eventsAction.removeWeeklyEvents());
  }
}
function WeekStart(day) {
  console.log('ok');

  return '';
}
