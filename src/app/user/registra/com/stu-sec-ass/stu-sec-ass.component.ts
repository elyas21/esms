import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { GradeService } from 'src/app/service/user/grade.service';
import { SectionService } from 'src/app/service/user/section.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { CourseSecLecAssService } from 'src/app/service/user/course-sec-lec-ass.service';
import { StudentService } from 'src/app/service/user/student.service';
import { Student, Section, StuSec } from 'src/app/model/Student';

@Component({
  selector: 'app-stu-sec-ass',
  templateUrl: './stu-sec-ass.component.html',
  styleUrls: ['./stu-sec-ass.component.scss']
})
export class StuSecAssComponent implements OnInit {
  grades;
  subscription: Subscription;
  SectionList;
  selectedSection = null;
  dataSource: any;
  courseList: Observable<any>;
  candidateMales: Array<Student>;
  candidateFemales: Array<Student>;
  registerdMales: Array<Student>;
  registerdFemales: Array<Student>;
  sections;
  stuList: Array<Student>;
  selectedGrade;
  color = 'primary';
  determinationValue = 0;
  determinateAnimationEndValue: number;
  currentUser: User;
  progress = 0;
  registerdStus;
  data;

  constructor(
    public gradeSer: GradeService,
    private StuSer: StudentService,
    public secSer: SectionService,
    public authenticationService: AuthService,
    private corSeLeAssSer: CourseSecLecAssService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });
  }

  getSections(id) {
    // get sections by school and classYear
    this.secSer.getAllBySchoolGradeClassYear(id).subscribe(x => {
      this.SectionList = x ? x : [];
      console.log(this.SectionList);
    });
    // show section info no of registerd stus male and femele
    // navigate show all students
    // add students
  }
  getCandidateStudents(grade) {
    console.log(grade);
    this.selectedGrade = grade;
    // get all grade.grade - 1 filter by is regCandidate

    this.StuSer.getAllBySchoolGradeClassYear(grade.grade).subscribe(res => {
      this.candidateFemales = [];
      this.candidateMales = [];
      this.stuList = res;
      console.log(this.stuList);
      if (this.stuList.length > 0) {
        this.candidateMales = this.stuList.filter(x => x.sex == 'male');
        this.candidateFemales = this.stuList.filter(stu => stu.sex == 'female');
        console.log(this.candidateMales);
        console.log(this.candidateFemales);
      }
    });
  }
  getRegisterdStudents(grade) {
    this.StuSer.getallRegisterdStudentsByGradeClassYear(grade.grade).subscribe(res => {
      this.registerdStus = res;

      this.registerdMales = this.registerdStus.filter(x => x.sex === 'male');

      this.registerdFemales = this.registerdStus.filter(stu => stu.sex === 'female');

      console.log(this.registerdStus);
    });
  }

  shufle() {
    this.shuffleAsign(this.candidateMales, this.candidateFemales, this.SectionList);
    this.StuSer.getAllBySchoolGradeClassYear(this.selectedGrade.gradeId).subscribe(res => {
      this.stuList = res;
      console.log(this.stuList);
      this.candidateMales = this.stuList.filter(x => x.sex === 'male');
      this.candidateFemales = this.stuList.filter(stu => stu.sex === 'female');
      console.log(this.candidateMales);
      console.log(this.candidateFemales);
    });
  }
  shuffleAsign(boys: Student[], girls: Student[], sections: Section[]) {
    // here sort students by their grade
    const len = boys.length + girls.length;
    for (let index = 0; index < boys.length || index < girls.length; ) {
      // sort sections by noOFStudetns

      sections.forEach(secs => {
        console.log(index);
        if (boys[index]) {
          this.StuSer.secAssign({
            school: this.currentUser.school,
            classYear: this.currentUser.School.currentClassYear,
            section: secs.id,
            sex: boys[index].sex,
            currentGrade: this.selectedGrade.grade,
            studentId: boys[index].studentId
          }).subscribe(res => console.log(res));
        }

        if (girls[index]) {
          this.StuSer.secAssign({
            school: this.currentUser.school,
            classYear: this.currentUser.School.currentClassYear,
            section: secs.id,
            sex: girls[index].sex,
            currentGrade: this.selectedGrade.grade,
            studentId: girls[index].studentId
          }).subscribe(res => console.log(res));
        }
        index++;
        this.progress = (len / (len - index)) * 100;
        console.log(this.progress);
      });
      // this.stuSer.secAssign(studSec).subscribe(res => console.log(res));
    }
  }
}
