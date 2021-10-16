import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  range = new FormGroup({
    start: new FormControl('',Validators.required),
    end: new FormControl('',Validators.required)
  });
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.today = Date.now();
    let a = this.today;
    console.log(this.today);

    this.store
      .pipe(select(fromSudoEventsSelector.selectEventViewModel))
      .subscribe(res => (this.sudoevEnts = res));
  }
  Populate() {
    console.log('populate...');
    console.log(this.sudoevEnts);
    
    // get data by input decorator from sschedule componet to pass to backend to update
    this.store.dispatch(
      fromEventsAction.PopulateEvents({ range: this.range.value, events: this.sudoevEnts })
    );
    // this.store.dispatch(fromSudoScheduleAction.loadEvents({ /section: 'sec-1-0-3-b' }));

  }

  Publish() {
    console.log('publish...');
  }
}
