import { Component, OnInit } from '@angular/core';
import { FinaceService } from '../../../../../service/user/finace.service';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  currentUser: User;
  finaceId;
  finaceName;

  constructor(
    private finSer: FinaceService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    this.finSer.create(value).subscribe(res => {
      this.snackbar.open(this.finaceName + ` Add As Finace`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.finaceId = '';
      this.finaceName = '';
    });
  }
}
