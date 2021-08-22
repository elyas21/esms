import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { CourseService } from 'src/app/service/user/course.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  currentUser: User;
  courseId;
  courseName;

  constructor(
    private courseSer: CourseService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    this.courseSer.create(value).subscribe(res => {
      this.snackbar.open(this.courseName + ` Add As Grade`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.courseId = '';
      this.courseName = '';
    });
  }
}
