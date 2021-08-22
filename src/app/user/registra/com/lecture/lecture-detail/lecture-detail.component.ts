import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LectureService } from 'src/app/service/user/lecture.service';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.scss']
})
export class LectureDetailComponent implements OnInit {
  teacher;
  id;
  currentUser: User;
  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private stuSer: LectureService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {}

  onSubmit() {
    this.teacher = this.stuSer.getOneBySchool(this.id);
  }
}
