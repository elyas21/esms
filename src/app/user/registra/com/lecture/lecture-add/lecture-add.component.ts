import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { LectureService } from 'src/app/service/user/lecture.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lecture-add',
  templateUrl: './lecture-add.component.html',
  styleUrls: ['./lecture-add.component.scss']
})
export class LectureAddComponent implements OnInit {
  currentUser: User;
  sectionList: Array<string>;
  teacherId;
  teacherName;
  school;

  constructor(
    private stuSer: LectureService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    this.stuSer.create(value).subscribe(res => {
      this.snackbar.open(this.teacherName + ` Add As Leture`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.teacherId = '';
      this.teacherName = '';
      this.school = '';
    });
  }
}
