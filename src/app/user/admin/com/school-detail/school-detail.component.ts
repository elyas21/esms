import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SchoolService } from 'src/app/service/user/school.service';
import { DirectorService } from 'src/app/service/user/director.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {
  schoolId;
  school;
  expandAddress;

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
    private route: ActivatedRoute,
    private router: Router,
    private scSer: SchoolService,
    private drSer: DirectorService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private sc: SchoolService
  ) {
    this.expandAddress = true;
    this.createForm();
  }
  ngOnInit() {
    this.school = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.scSer.get(params.get('id')))
    );
    this.school.subscribe(res => {
      console.log(res);
      this.schooladdform.patchValue(res);
    });
  }

  onSubmit() {
    this.school = this.scSer.get(this.schoolId).subscribe(res => {
      console.log(res);
    });
  }

  createForm() {
    this.schooladdform = this.fb.group({
      // <-- the parent FormGroup
      schoolId: ['', Validators.required],
      schoolName: ['', Validators.required],
      Address: this.addressForm
    });
  }
  onSubmitEdit() {
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
