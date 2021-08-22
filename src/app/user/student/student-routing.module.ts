import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { AuthGuard, StudentGuard } from 'src/app/helpers';
import { AttendanceComponent } from './com/attendance/attendance.component';
import { ProfileComponent } from './com/profile/profile.component';
import { StuGradingComponent } from './com/grading/grading.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard, StudentGuard]
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
    canActivate: [AuthGuard, StudentGuard]
  },
  {
    path: 'grading',
    component: StuGradingComponent,
    canActivate: [AuthGuard, StudentGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard, StudentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
