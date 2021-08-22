import { Component, OnInit } from '@angular/core';
import { CourseSecLecAssService } from 'src/app/service/user/course-sec-lec-ass.service';
import { GradeService } from 'src/app/service/user/grade.service';
import { Subscription, Observable } from 'rxjs';
import { SectionService } from 'src/app/service/user/section.service';
import { LectureService } from 'src/app/service/user/lecture.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-co-se-le-ass',
  templateUrl: './co-se-le-ass.component.html',
  styleUrls: ['./co-se-le-ass.component.scss']
})
export class CoSeLeAssComponent implements OnInit {
  grades;
  subscription: Subscription;
  lectureList;
  selectedSection = null;
  dataSource: any;
  courseList: Observable<any>;
  courseId;
  sections;

  currentUser: User;
  constructor(
    public gradeSer: GradeService,
    private lecSer: LectureService,
    public secSer: SectionService,

    public authenticationService: AuthService,
    private corSeLeAssSer: CourseSecLecAssService
  ) {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });

    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.lecSer.getAllBySchool().subscribe(res => {
      this.lectureList = res;
    });
  }

  getSections(id) {
    this.secSer.getAllBySchoolGradeClassYear(id).subscribe(res => {
      this.sections = res;
      console.log(this.sections);
    });
  }

  getAssigni(id) {
    this.corSeLeAssSer.getAllBySchoolGrade(id).subscribe(res => {
      this.selectedSection = res;
    });
  }

  update(data) {
    this.corSeLeAssSer.update(data).subscribe(res => {
      console.log(res);
    });
  }
  add(csa, i?: number) {
    // this.csaSer.addCourseSecLecAss(csa).subscribe(res => {
    //   if (res.hasOwnProperty("regsterd")) {
    //     this.dataSource[i].isNew = false;
    //     this.dataSource[i].flag = false;
    //   }
    //   console.log(res);
    // });
  }

  selectedUser(user: any, event: any) {
    user.flag = !user.flag;
    if (!user.flag) {
      this.update(user);
    }
    console.log(user + user.flag);
  }

  addNewRow() {
    // this.dataSource.push({});
    this.dataSource.push({
      isNew: true,
      flag: true
    });
    // this.cancleUpdate(this.dataSource[this.dataSource.length])
    // this.cancleUpdate(this.dataSource[this.dataSource.length - 1], null, true);
  }

  cancleUpdate(user: any, event?: any, isNew?: boolean, i?: number) {
    user.flag = !user.flag;
    if (isNew) {
      console.log(user);
      this.dataSource.splice(i, 1);
      // this.dataSource.reduce(user.i)
    }
  }
  remove(user: any, i: number) {
    // console.log(user);
    // const ci = confirm("are u shure");
    // if (ci) {
    //   this.csaSer.remove(user).subscribe(res => {
    //     if (res.hasOwnProperty("removed")) {
    //       this.dataSource.splice(i, 1);
    //     }
    //   });
    // }
  }
}
