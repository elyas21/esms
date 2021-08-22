import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StuGradingComponent } from './com/grading/grading.component';
import { AttendanceComponent } from './com/attendance/attendance.component';
import { ProfileComponent } from './com/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentComponent, StuGradingComponent, AttendanceComponent, ProfileComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule]
})
export class StudentModule {}
