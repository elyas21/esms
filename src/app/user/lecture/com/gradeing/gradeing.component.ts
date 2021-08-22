import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { CourseSecLecAssService } from 'src/app/service/user/course-sec-lec-ass.service';
import { User } from 'src/app/model/User';
import { CourseGradeingService } from 'src/app/service/user/course-gradeing.service';

@Component({
  selector: 'app-gradeing',
  templateUrl: './gradeing.component.html',
  styleUrls: ['./gradeing.component.scss']
})
export class GradeingComponent implements OnInit {
  currentUser: User;
  selectedSection;
  courseList;
  section;
  course;
  dataSource;
  constructor(
    public authenticationService: AuthService,
    private corSeLeAssSer: CourseSecLecAssService,
    private corGradeing: CourseGradeingService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.corSeLeAssSer.getAllSectionsByLecture(this.currentUser.userId).subscribe(res => {
      this.selectedSection = res;
      console.log(this.selectedSection);
    });
  }
  getAssigni(coures, section) {
    console.log();
    this.course = coures;
    this.courseList = null;
    this.section = section;
    this.corSeLeAssSer
      .getAllCoursesBySectionLecture(this.currentUser.userId, section)
      .subscribe(res => {
        this.courseList = res;
        console.log(this.courseList);
      });
    // this.corGradeing
    //   .getStusGrading(this.currentUser.userId, coures, section)
    //   .subscribe(res => console.log(res));
  }
  getByTerm(term) {
    this.corGradeing
      .getStusGradingByterm(this.currentUser.userId, this.course, this.section, term)
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }

  update(data) {
    this.corGradeing.update(data).subscribe(res => {
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
