import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { GradeService } from 'src/app/service/user/grade.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.scss']
})
export class GradeAddComponent implements OnInit {
  currentUser: User;
  gradeId;
  gradeName;
  grade;

  constructor(
    private gradeSer: GradeService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    this.gradeSer.create(value).subscribe(res => {
      this.snackbar.open(this.gradeName + ` Add As Grade`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.gradeId = '';
      this.gradeName = '';
      this.grade = '';
    });
  }
}
