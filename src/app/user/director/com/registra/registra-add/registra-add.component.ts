import { Component, OnInit } from '@angular/core';
import { RegistraService } from 'src/app/service/user/registra.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registra-add',
  templateUrl: './registra-add.component.html',
  styleUrls: ['./registra-add.component.scss']
})
export class RegistraAddComponent implements OnInit {
  currentUser;
  registraId;
  registraName;

  constructor(
    private regSer: RegistraService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    this.regSer.create(value).subscribe(res => {
      this.snackbar.open(this.registraName + ` Add As Registra`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.registraId = '';
      this.registraName = '';
    });
  }
}
