import { Component, OnInit } from '@angular/core';
import { CourseGradeingService } from 'src/app/service/user/course-gradeing.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GradeService } from 'src/app/service/user/grade.service';

@Component({
  selector: 'app-class-grade',
  templateUrl: './class-grade.component.html',
  styleUrls: ['./class-grade.component.scss']
})
export class ClassGradeComponent implements OnInit {
  dataSource;
  section;
  Selectedcourse;
  courseList;
  grade;

  constructor(
    private courseGrading: CourseGradeingService,
    private gradeSer: GradeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.section = params.get('sectionId');
    //     console.log('params');
    //     this.grade = params.get('gradeNo');
    //     return '';
    //   })
    // );
    this.section = this.route.snapshot.paramMap.get('sectionId');
    this.grade = this.route.snapshot.paramMap.get('gradeNo');
    console.log(this.section);
    console.log(this.grade);
    this.gradeSer.getCourseList(this.grade).subscribe(res => {
      this.courseList = res;
      console.log(this.courseList);
    });
  }

  getGrades(id) {
    console.log(this.section);
    console.log(id);
    this.courseGrading
      .getAllBySchoolSectionTerm(this.section, id, 1)
      .subscribe(arg => (this.dataSource = arg));
    console.log(this.dataSource);
  }
}
