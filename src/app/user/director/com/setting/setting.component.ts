import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { SchoolService } from 'src/app/service/user/school.service';
import { ClassYearService } from 'src/app/service/user/class-year.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  currentClassYear;
  currentUser: User;
  name;
  semisterEnd;
  semisterStart;
  classYearList;
  classYear;
  semisterClassYear;
  semisterClassEnd;

  constructor(
    private schoolSer: SchoolService,
    private classYearSer: ClassYearService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.classYearList = this.classYearSer.getAllBySchool();
    // this.classYearList.subscribe(res => console.log(res))
  }

  onSubmit(value) {
    console.log(value);
    value.school = this.currentUser.school;
    value.currentClassYear = value.semisterClassYear;
    this.schoolSer.update(value).subscribe(res => {
      // this.snackbar.open(this.name + ` Current Class Year Added` , '' , {
      //   duration: 1000,
      //   verticalPosition: 'top',
      // });
      console.log(res);
    });
  }
  onSubmitLastYear(value) {
    console.log(value);
    value.school = this.currentUser.school;
    value.lastClassYear = value.semisterClassYear;
    this.schoolSer.update(value).subscribe(res => {
      // this.snackbar.open(this.name + ` Current Class Year Added` , '' , {
      //   duration: 1000,
      //   verticalPosition: 'top',
      // });
      console.log(res);
    });
  }
}
