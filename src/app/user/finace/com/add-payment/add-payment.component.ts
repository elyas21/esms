import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { PaymentService } from 'src/app/service/user/payment.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  currentUser: User;
  paymentId;
  studentId;
  term;
  money;
  finaceName;
  termsList;

  constructor(
    private finSer: PaymentService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
    this.termsList = [
      'term1',
      'term2',
      'term3',
      'term4',
      'term5',
      'term6',
      'term7',
      'term8',
      'term9',
      'term10'
    ];
  }

  ngOnInit() {}

  onSubmit(value) {
    value.school = this.currentUser.school;
    value.paymentId = 'pay-' + value.studentId;
    // value.'${thsi.term}' = this.money;
    this.finSer.create(value).subscribe(res => {
      this.snackbar.open(this.finaceName + ` Add As Finace`, '', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.paymentId = '';
      this.finaceName = '';
    });
  }
}
function assignVlue(value) {
  // if();
}
