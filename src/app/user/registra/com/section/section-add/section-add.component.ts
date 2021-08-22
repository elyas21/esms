import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { SectionService } from 'src/app/service/user/section.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeService } from 'src/app/service/user/grade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-add',
  templateUrl: './section-add.component.html',
  styleUrls: ['./section-add.component.scss']
})
export class SectionAddComponent implements OnInit {
  currentUser: User;
  gradeList: Observable<any>;
  yearList: Array<string>;
  sectionId;
  sectionName;
  classYear;
  gradeNo;
  school;

  constructor(
    private stuSer: SectionService,
    private secSer: GradeService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.yearList = ['2012', '2013', '2014', '2015'];
    this.gradeList = this.secSer.getAllBySchool();
  }

  onSubmit(value) {
    const v = {};
    value.sectionId = this.sectionId;
    value.classYear = this.currentUser.School.currentClassYear;
    value.school = this.currentUser.school;
    console.log(value);

    this.stuSer.create(value).subscribe(res => {
      this.snackbar.open(this.sectionName + ` Add As Leture`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.sectionId = '';
      this.sectionName = '';
      this.classYear = '';
      this.gradeNo = '';
      this.school = '';
    });
  }
}
