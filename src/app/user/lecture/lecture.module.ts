import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureRoutingModule } from './lecture-routing.module';
import { LectureComponent } from './lecture.component';
import { GradeingComponent } from './com/gradeing/gradeing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChooseDateComponent } from './com/attendace/choose-date/choose-date.component';
import { FillAttendaceComponent } from './com/attendace/fill-attendace/fill-attendace.component';
import { MatCardModule } from '@angular/material/card';
import { DayAtdComponent } from './com/attendace/day-atd/day-atd.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClassGradeComponent } from './com/class-grade/class-grade.component';
import { GradeTableComponent } from './com/class-grade/grade-table/grade-table.component';

@NgModule({
  declarations: [
    LectureComponent,
    GradeingComponent,
    ChooseDateComponent,
    FillAttendaceComponent,
    DayAtdComponent,
    ClassGradeComponent,
    GradeTableComponent
  ],
  imports: [
    CommonModule,
    LectureRoutingModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class LectureModule {}
