import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Event, SudoEvent } from 'src/app/model/event';
import * as fromEventsAction from '../../store/actions/event.actions';
import * as fromSudoEventsSelector from '../../store/selectors/sudoevent.selelctors';

@Component({
  selector: 'app-populate-event',
  templateUrl: './populate-event.component.html',
  styleUrls: ['./populate-event.component.scss']
})
export class PopulateEventComponent implements OnInit {
  today;
  sudoevEnts;

  @Input() sectionId: string;
  range = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.today = Date.now();
    let a = this.today;
    console.log(this.today);

    this.store
      .pipe(select(fromSudoEventsSelector.selectSudoEventViewModel))
      .subscribe(res => (this.sudoevEnts = res));
  }
  Populate() {
    console.log('populate...');
    console.log(this.sudoevEnts);

    // get data by input decorator from sschedule componet to pass to backend to update
    this.store.dispatch(
      fromEventsAction.PopulateEvents({
        section: this.sectionId,
        range: this.range.value,
        events: this.sudoevEnts
      })
    );
    // this.store.dispatch(fromSudoScheduleAction.loadEvents({ /section: 'sec-1-0-3-b' }));
  }

  Publish() {
    console.log('publish...');
  }
  gotoWeeklySchedule() {
    let date = new Date();
    let start = new Date(date);
    let end = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    end.setDate(end.getDate() + 6);
    let sstart = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`;
    let eend = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`;
    console.log(this.sectionId);
    console.log(sstart);
    console.log(eend);

    this.router.navigate(['registra', 'schedule', 'weekly', this.sectionId, sstart, eend]);
  }
  // function return start and end date of the week
  getWeekRange(date) {
    let start = new Date(date);
    let end = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    end.setDate(end.getDate() + 6);
    return { start, end };
  }
}
