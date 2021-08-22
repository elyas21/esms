import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from 'src/app/service/user/student.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { User } from 'src/app/model/User';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student;
  id;
  currentUser: User;
  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private stuSer: StudentService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.student = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.stuSer.getOneBySchool(params.get('id'))))
      .subscribe(res => {
        this.student = res;
      });
  }

  onSubmit() {
    this.stuSer.getOneBySchool(this.id).subscribe(res => {
      this.student = res;
    });
  }
}
