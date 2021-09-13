import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Staff } from 'src/app/model/User';
import * as fromStaffAction from '../../../store/actions/staff.actions';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  staffForm: FormGroup;
  d: Staff;
  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }
  createForm() {
    this.staffForm = this.fb.group({
      staffId: ['', Validators.required],
      staffFirstName: ['', Validators.required],
      staffMiddleName: ['', Validators.required],
      staffLastName: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.staffForm.value);
    this.store.dispatch(fromStaffAction.addStaff({ staff: this.staffForm.value }));
    console.warn(this.staffForm.value);
  }
}
