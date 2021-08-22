import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SchoolService } from 'src/app/service/user/school.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorService } from 'src/app/service/user/director.service';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.scss']
})
export class SchoolAddComponent {
  addressForm = new FormGroup({
    region: new FormControl(''),
    zone: new FormControl(''),
    city: new FormControl(''),
    kfleketema: new FormControl(''),
    wereda: new FormControl(''),
    kebele: new FormControl(''),
    houseNo: new FormControl(''),
    phoneNo: new FormControl(''),
    homephno: new FormControl(''),
    poBox: new FormControl(''),
    email: new FormControl('', Validators.email)
  });
  addDirector = new FormGroup({
    school: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNo: new FormControl(''),
    directorId: new FormControl(''),
    email: new FormControl('')
  });
  schooladdform: FormGroup;
  states;

  constructor(
    private fb: FormBuilder,
    private drSer: DirectorService,
    private snackbar: MatSnackBar,
    private sc: SchoolService
  ) {
    this.createForm();
    this.onSubmit();
  }

  createForm() {
    this.schooladdform = this.fb.group({
      // <-- the parent FormGroup
      schoolId: ['', Validators.required],
      schoolName: ['', Validators.required],
      schoolAddress: this.addressForm
    });
  }
  onSubmit() {
    // console.log(this.schooladdform.value)
    this.sc.create(this.schooladdform.value).subscribe(res => {
      console.log(res);
      this.snackbar.open(this.schooladdform.value.schoolName + ` Add As School`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
    });
  }
  addDirectorM() {
    this.drSer.create(this.addDirector.value).subscribe(res => {
      console.log(res);
      this.snackbar.open(this.schooladdform.value.schoolName + ` Add As School`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
    });
  }
}
