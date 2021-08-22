import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/user/student.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { GradeService } from 'src/app/service/user/grade.service';
import { CourseGradeingService } from 'src/app/service/user/course-gradeing.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.scss']
})
export class StuGradingComponent implements OnInit {
  currentUser: User;
  dataSource;

  constructor(
    private stuSer: StudentService,
    private gradeSer: CourseGradeingService,
    private auth: AuthService
  ) {
    this.auth.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.gradeSer
      .getGradeBySchoolStuClassYearTerm(
        this.currentUser.userId,
        1,
        this.currentUser.School.currentClassYear
      )
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }

  getByTerm(term) {
    this.gradeSer
      .getGradeBySchoolStuClassYearTerm(
        this.currentUser.userId,
        term,
        this.currentUser.School.currentClassYear
      )
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
}
