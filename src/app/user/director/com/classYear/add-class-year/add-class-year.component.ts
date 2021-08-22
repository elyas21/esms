import { Component, OnInit } from '@angular/core';
import { ClassYearService } from 'src/app/service/user/class-year.service';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-class-year',
  templateUrl: './add-class-year.component.html',
  styleUrls: ['./add-class-year.component.scss']
})
export class AddClassYearComponent implements OnInit {
  currentUser: User;
  name;
  start;
  semisterType;
  startDate;
  constructor(
    private classYearSer: ClassYearService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.start = this.startDate;
    value.school = this.currentUser.school;
    this.classYearSer.create(value).subscribe(res => {
      this.snackbar.open(this.name + ` Add As classyear`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.name = '';
      this.semisterType = '';
      this.start = '';
    });
  }
}
