import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StudentService } from 'src/app/service/user/student.service';
import { switchMap } from 'rxjs/operators';
import { SectionService } from 'src/app/service/user/section.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-view-all-cand-stu',
  templateUrl: './view-all-cand-stu.component.html',
  styleUrls: ['./view-all-cand-stu.component.scss']
})
export class ViewAllCandStuComponent implements OnInit {
  dataSource;
  reg = false;
  grade;
  sectionList;
  gradeId;
  selectedSection;
  currentUser: User;

  constructor(
    private stuSer: StudentService,
    private route: ActivatedRoute,
    private secSer: SectionService,
    private router: Router,
    private authSer: AuthService
  ) {
    this.authSer.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.grade = params.get('grade');
          this.gradeId = params.get('id');

          // getSectionListby gradeId
          this.secSer.getAllBySchoolGradeClassYear(this.grade).subscribe(x => {
            this.sectionList = x ? x : [];
            console.log(this.sectionList);
          });

          if (params.get('reg') == 'true') {
            this.reg = true;
            return this.stuSer.getallRegisterdStudentsByGradeClassYear(this.grade);
          }
          return this.stuSer.getAllBySchoolGradeClassYear(parseInt(this.grade));
        })
      )
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
  regChange($event) {
    if ($event.checked) {
      return this.stuSer.getallRegisterdStudentsByGradeClassYear(this.grade).subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
    }
    return this.stuSer.getAllBySchoolGradeClassYear(this.grade).subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }

  update(user) {
    console.log(user);
    this.assignToSection(user, this.selectedSection);
  }

  selectedUser(user: any, event: any) {
    console.log(user);
    user.flag = !user.flag;
    if (!user.flag) {
      console.log('uppppppppppppppppp');
      this.update(user);
    }
    console.log(user + user.flag);
  }

  cancleUpdate(user: any, event?: any, isNew?: boolean, i?: number) {
    user.flag = !user.flag;
    if (isNew) {
      console.log(user);
      this.dataSource.splice(i, 1);
      // this.dataSource.reduce(user.i)
    }
  }

  assignToSection(student, section) {
    console.log(section);
    console.log(student);
    console.log(this.grade);
    console.log(this.currentUser.School.currentClassYear);
    if (student.sex == 'male') {
      this.stuSer
        .secAssign({
          school: this.currentUser.school,
          classYear: this.currentUser.School.currentClassYear,
          section,
          sex: student.sex,
          currentGrade: this.grade,
          studentId: student.studentId
        })
        .subscribe(res => console.log(res));
    }

    if (student.sex == 'female') {
      this.stuSer
        .secAssign({
          school: this.currentUser.school,
          classYear: this.currentUser.School.currentClassYear,
          section,
          sex: student.sex,
          currentGrade: this.grade,
          studentId: student.studentId
        })
        .subscribe(res => console.log(res));
    }
  }

  sectionFilter(section) {
    console.log(section);
    // if (this.dataSource.Sections) {
    //   this.dataSource = this.dataSource.filter(
    //     x => x.Sections[0].id == section
    //   );
    // }
  }

  remove(stu, section, sex) {
    console.log(stu);

    const obj = {
      school: this.currentUser.school,
      studentId: stu,
      classYear: this.currentUser.School.currentClassYear,
      section,
      sex
    };
    this.stuSer.removeSectionAssign(obj).subscribe(x => console.log(x));
  }
}

async function getSections(id) {
  // get sections by school and classYear
  this.secSer.getAllBySchoolGradeClassYear(id).subscribe(x => {
    const sectionList = x ? x : [];
    console.log(sectionList);
    return sectionList;
  });

  return [];
}
