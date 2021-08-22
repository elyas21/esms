import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/user/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course;
  id;
  currentUser: User;
  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private stuSer: CourseService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {}

  onSubmit() {
    this.course = this.stuSer.getOneBySchool(this.id);
  }
}
