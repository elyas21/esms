import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStaffActions from '../../../store/actions/staff.actions';
import * as StaffSelector from '../../../store/selectors/staff.selectors';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {
  vm$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromStaffActions.loadStaffs());
    this.vm$ = this.store.pipe(select(StaffSelector.selectAllEntities));
  }
}
