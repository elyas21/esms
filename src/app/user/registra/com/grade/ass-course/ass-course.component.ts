import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { GradeService } from 'src/app/service/user/grade.service';
import { CourseService } from 'src/app/service/user/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ass-course',
  templateUrl: './ass-course.component.html',
  styleUrls: ['./ass-course.component.scss']
})
export class AssCourseComponent implements OnInit {
  grades;
  subscription: Subscription;
  selectedGrade = null;
  dataSource: any;
  courseList: Observable<any>;
  courseId;
  constructor(
    public gradeSer: GradeService,
    private snackbar: MatSnackBar,
    private corSer: CourseService
  ) {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });
  }
  ngOnInit() {
    this.courseList = this.corSer.getAllBySchool();
  }

  selectGrade(id) {
    this.gradeSer.getOneBySchoolGrade(id).subscribe(res => {
      this.selectedGrade = res;
      console.log(this.selectedGrade);
      console.log(this.grades);
      this.dataSource = this.selectedGrade.Courses;
    });
  }

  update(user) {
    console.log(user);
    this.gradeSer.assGradeCourse(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any) {
    let p = { gradeId: '', courses: [] };
    p.gradeId = this.selectedGrade.gradeId;
    p.courses = [user.courseId];
    console.log(p);
    this.gradeSer.assGradeCourse(p).subscribe(res => {
      if (res.hasOwnProperty('regsterd')) {
        this.snackbar.open(this.courseId + ` Add As Grade`, '', {
          duration: 1000,
          verticalPosition: 'top'
        });
        //  ;
        //     this.dataSource.conct(res.JSON)
      }
      console.log(res);
    });
  }

  remove(user: any, i: number) {
    console.log(user);
    const ci = confirm('are u shure');
    if (ci) {
      this.gradeSer.delete(user.finaceId).subscribe(res => {
        if (res) {
          if (res.hasOwnProperty('removed')) {
            this.dataSource.splice(i, 1);
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
