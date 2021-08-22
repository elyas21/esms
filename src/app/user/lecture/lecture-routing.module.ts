import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureComponent } from './lecture.component';
import { AuthGuard, LectureGuard } from 'src/app/helpers';
import { GradeingComponent } from './com/gradeing/gradeing.component';
import { ChooseDateComponent } from './com/attendace/choose-date/choose-date.component';
import { FillAttendaceComponent } from './com/attendace/fill-attendace/fill-attendace.component';
import { DayAtdComponent } from './com/attendace/day-atd/day-atd.component';
import { ClassGradeComponent } from './com/class-grade/class-grade.component';

const routes: Routes = [
  {
    path: '',
    component: LectureComponent,
    canActivate: [AuthGuard, LectureGuard]
  },
  {
    path: 'gradeing',
    component: GradeingComponent,
    canActivate: [AuthGuard, LectureGuard]
  },
  {
    path: 'attendance/:id',
    component: ChooseDateComponent,
    canActivate: [AuthGuard, LectureGuard]
  },
  {
    path: 'class-grade/:gradeNo/:sectionId',
    component: ClassGradeComponent,
    canActivate: [AuthGuard, LectureGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule {}
