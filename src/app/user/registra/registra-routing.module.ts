import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistraComponent } from './registra.component';
import { AuthGuard, RegistraGuard } from 'src/app/helpers';
import { StudentViewComponent } from './com/student/student-view/student-view.component';
import { RegStudentComponent } from './com/student/reg-student.component';
import { StudentDetailComponent } from './com/student/student-detail/student-detail.component';
import { StudentAddComponent } from './com/student/student-add/student-add.component';
import { RegGradeComponent } from './com/grade/reg-grade.component';
import { GradeViewComponent } from './com/grade/grade-view/grade-view.component';
import { GradeDetailComponent } from './com/grade/grade-detail/grade-detail.component';
import { GradeAddComponent } from './com/grade/grade-add/grade-add.component';
import { RegLectureComponent } from './com/lecture/reg-lecture.component';
import { LectureViewComponent } from './com/lecture/lecture-view/lecture-view.component';
import { LectureDetailComponent } from './com/lecture/lecture-detail/lecture-detail.component';
import { LectureAddComponent } from './com/lecture/lecture-add/lecture-add.component';
import { RegSectionComponent } from './com/section/reg-section.component';
import { SectionViewComponent } from './com/section/section-view/section-view.component';
import { SectionDetailComponent } from './com/section/section-detail/section-detail.component';
import { SectionAddComponent } from './com/section/section-add/section-add.component';
import { RegCourseComponent } from './com/course/reg-course.component';
import { CourseViewComponent } from './com/course/course-view/course-view.component';
import { CourseDetailComponent } from './com/course/course-detail/course-detail.component';
import { CourseAddComponent } from './com/course/course-add/course-add.component';
import { AssCourseComponent } from './com/grade/ass-course/ass-course.component';
import { CoSeLeAssComponent } from './com/co-se-le-ass/co-se-le-ass.component';
import { StuSecAssComponent } from './com/stu-sec-ass/stu-sec-ass.component';
import { ViewAllCandStuComponent } from './com/stu-sec-ass/com/view-all-cand-stu/view-all-cand-stu.component';
import { ScheduleComponent } from './com/schedule/schedule.component';
import { SScheduleComponent } from '../shared/schedule/components/schedule/sschedule.component';
import { WeeklyEventComponent } from '../shared/schedule/components/weekly-event/weekly-event.component';

const routes: Routes = [
  {
    path: '',
    component: RegistraComponent,
    canActivate: [AuthGuard, RegistraGuard]
  },
  {
    path: 'student',
    component: RegStudentComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: '',
        component: StudentViewComponent
      },
      {
        path: 'view',
        component: StudentViewComponent
      },
      {
        path: 'view/:pageSize/:page',
        component: StudentViewComponent
      },
      {
        path: 'detail',
        component: StudentDetailComponent
      },
      {
        path: 'detail/:id',
        component: StudentDetailComponent
      },
      {
        path: 'add',
        component: StudentAddComponent
      }
    ]
  },
  {
    path: 'grade',
    component: RegGradeComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: '',
        component: GradeViewComponent
      },
      {
        path: 'view',
        component: GradeViewComponent
      },
      {
        path: 'detail',
        component: GradeDetailComponent
      },
      {
        path: 'detail/:id',
        component: GradeDetailComponent
      },
      {
        path: 'add',
        component: GradeAddComponent
      },
      {
        path: 'assign-course',
        component: AssCourseComponent
      }
    ]
  },
  {
    path: 'lecture',
    component: RegLectureComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: '',
        component: LectureViewComponent
      },
      {
        path: 'view',
        component: LectureViewComponent
      },
      {
        path: 'detail',
        component: LectureDetailComponent
      },
      {
        path: 'detail/:id',
        component: LectureDetailComponent
      },
      {
        path: 'add',
        component: LectureAddComponent
      }
    ]
  },
  {
    path: 'section',
    component: RegSectionComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: '',
        component: SectionViewComponent
      },
      {
        path: 'view',
        component: SectionViewComponent
      },
      {
        path: 'detail',
        component: SectionDetailComponent
      },
      {
        path: 'detail/:id',
        component: SectionDetailComponent
      },
      {
        path: 'add',
        component: SectionAddComponent
      }
    ]
  },
  {
    path: 'course',
    component: RegCourseComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: '',
        component: CourseViewComponent
      },
      {
        path: 'view',
        component: CourseViewComponent
      },
      {
        path: 'detail',
        component: CourseDetailComponent
      },
      {
        path: 'detail/:id',
        component: CourseDetailComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      }
    ]
  },
  {
    path: 'course-section-lecture-ass',
    component: CoSeLeAssComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      // {
      //   path: '',
      //   component: CourseViewComponent
      // },
      // {
      //   path: 'view',
      //   component: CourseViewComponent
      // },
      // {
      //   path: 'detail',
      //   component: CourseDetailComponent
      // },
      // {
      //   path: 'detail/:id',
      //   component: CourseDetailComponent
      // },
      // {
      //   path: 'add',
      //   component: CourseAddComponent
      // }
    ]
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard, RegistraGuard],
    children: [
      {
        path: 'sudo/:section',
        component: SScheduleComponent
      },
      {
        path: 'weekly/:section/:start/:end',
        component: WeeklyEventComponent
      }
    ]
  },
  
  {
    path: 'assign-stu-sec',
    component: StuSecAssComponent
  },
  {
    path: 'assign-stu-sec/:grade/:gradeId/:id',
    component: ViewAllCandStuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraRoutingModule {}
