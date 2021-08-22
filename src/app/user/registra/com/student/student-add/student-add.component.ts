import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/service/user/student.service';
import { SectionService } from 'src/app/service/user/section.service';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { GradeService } from 'src/app/service/user/grade.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  currentUser: User;
  sectionList: Observable<any>;
  studentId;
  studentName;
  school;
  paymentInfo;
  section;
  grade;
  sex;
  gradeList;
  lastGrade;
  currentGrade;

  constructor(
    private stuSer: StudentService,
    private secSer: SectionService,
    private graSer: GradeService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.sectionList = this.secSer.getAllBySchool();
    // .pipe(pluck('sectionId'));

    this.graSer.getAllBySchool().subscribe(res => {
      this.gradeList = res;
    });
  }

  onSubmit(value) {
    value.school = this.currentUser.school;
    value.section = this.section;
    value.grade = this.grade;
    value.currentGrade = this.currentGrade;
    value.classYear = this.currentUser.School.currentClassYear;
    console.log(value);
    this.stuSer.create(value).subscribe(res => {
      this.snackbar.open(this.studentName + ` Add As Student`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.studentId = '';
      this.studentName = '';
      this.school = '';
      this.section = '';
      this.paymentInfo = '';
      this.sex = '';
    });
  }
}
