import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SchoolService } from 'src/app/service/user/school.service';
import { DirectorService } from 'src/app/service/user/director.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-school-view-detial',
  templateUrl: './school-view-detial.component.html',
  styleUrls: ['./school-view-detial.component.scss']
})
export class SchoolViewDetialComponent implements OnInit {
  schoolId;
  school;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scSer: SchoolService,
    private drSer: DirectorService,
    private snackbar: MatSnackBar,
    private sc: SchoolService
  ) {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.scSer.get(params.get('id'))))
      .subscribe(res => {
        this.school = res;
        console.log(this.school);
      });
  }
  ngOnInit() {
    console.log(this.school);
    this.drSer.getBySchool(this.school.schoolId).subscribe(res => {
      console.log(res);
    });
  }
}
