import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { SemisterService } from 'src/app/service/user/semister.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClassYearService } from 'src/app/service/user/class-year.service';

@Component({
  selector: 'app-add-semister',
  templateUrl: './add-semister.component.html',
  styleUrls: ['./add-semister.component.scss']
})
export class AddSemisterComponent implements OnInit {
  currentUser: User;
  name;
  semisterEnd;
  semisterStart;
  classYearList;
  classYear;
  semisterClassYear;
  semisterClassEnd;

  constructor(
    private semisterSer: SemisterService,
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
    value.start = this.semisterStart;
    console.log(value);
    this.semisterSer.create(value).subscribe(res => {
      this.snackbar.open(this.name + ` Add As classyear`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.name = '';
      this.semisterEnd = '';
      this.semisterStart = '';
      this.semisterClassEnd = '';
    });
  }
}
