import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from 'src/app/service/user/grade.service';

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})
export class GradeDetailComponent implements OnInit {
  grade;
  id;
  currentUser: User;
  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private stuSer: GradeService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {}

  onSubmit() {
    this.grade = this.stuSer.getOneBySchool(this.id);
  }
}
