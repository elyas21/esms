import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraRoutingModule } from './registra-routing.module';
import { RegistraComponent } from './registra.component';
import { LectureAddComponent } from './com/lecture/lecture-add/lecture-add.component';
import { LectureViewComponent } from './com/lecture/lecture-view/lecture-view.component';
import { LectureDetailComponent } from './com/lecture/lecture-detail/lecture-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './com/student/student-detail/student-detail.component';
import { StudentViewComponent } from './com/student/student-view/student-view.component';
import { StudentAddComponent } from './com/student/student-add/student-add.component';
import { SectionAddComponent } from './com/section/section-add/section-add.component';
import { SectionViewComponent } from './com/section/section-view/section-view.component';
import { SectionDetailComponent } from './com/section/section-detail/section-detail.component';
import { GradeDetailComponent } from './com/grade/grade-detail/grade-detail.component';
import { GradeViewComponent } from './com/grade/grade-view/grade-view.component';
import { GradeAddComponent } from './com/grade/grade-add/grade-add.component';
import { CourseAddComponent } from './com/course/course-add/course-add.component';
import { CourseViewComponent } from './com/course/course-view/course-view.component';
import { CourseDetailComponent } from './com/course/course-detail/course-detail.component';
import { RegCourseComponent } from './com/course/reg-course.component';
import { RegStudentComponent } from './com/student/reg-student.component';
import { RegLectureComponent } from './com/lecture/reg-lecture.component';
import { RegSectionComponent } from './com/section/reg-section.component';
import { RegGradeComponent } from './com/grade/reg-grade.component';
import { AssCourseComponent } from './com/grade/ass-course/ass-course.component';
import { CoSeLeAssComponent } from './com/co-se-le-ass/co-se-le-ass.component';
import { StuSecAssComponent } from './com/stu-sec-ass/stu-sec-ass.component';
import { ViewAllCandStuComponent } from './com/stu-sec-ass/com/view-all-cand-stu/view-all-cand-stu.component';
import { StudentViewAdvaceComponent } from './com/student/student-view-advace/student-view-advace.component';
import { AssignStuComponent } from './com/stu-sec-ass/com/assign-stu/assign-stu.component';
import { SelectSectionModalComponent } from './com/stu-sec-ass/select-section-modal/select-section-modal.component';
import { LecViewTableComponent } from './com/lecture/lec-view-table/lec-view-table.component';
import { TableLecViewComponent } from './com/lecture/table-lec-view/table-lec-view.component';
import { ScheduleComponent } from './com/schedule/schedule.component';
import { StoreModule } from '@ngrx/store';
import * as fromRegiStore from './store';
import * as fromGrade from './store/reducers/grade.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GradeEffects } from './store/effects/grade.effects';
import * as fromSection from './store/reducers/section.reducer';
import { SectionEffects } from './store/effects/section.effects';
import { ScheduleModule } from '../shared/schedule/schedule.module';

@NgModule({
  declarations: [
    RegistraComponent,
    RegSectionComponent,
    RegGradeComponent,
    RegStudentComponent,
    LectureAddComponent,
    LectureViewComponent,
    LectureDetailComponent,
    StudentDetailComponent,
    StudentViewComponent,
    StudentAddComponent,
    SectionAddComponent,
    SectionViewComponent,
    SectionDetailComponent,
    GradeDetailComponent,
    GradeViewComponent,
    GradeAddComponent,
    CourseAddComponent,
    CourseViewComponent,
    CourseDetailComponent,
    RegCourseComponent,
    RegStudentComponent,
    RegLectureComponent,
    AssCourseComponent,
    CoSeLeAssComponent,
    StuSecAssComponent,
    ViewAllCandStuComponent,
    StudentViewAdvaceComponent,
    AssignStuComponent,
    SelectSectionModalComponent,
    LecViewTableComponent,
    TableLecViewComponent,
    ScheduleComponent
  ],
  entryComponents: [SelectSectionModalComponent],
  imports: [
    ScheduleModule,
    CommonModule,
    RegistraRoutingModule,
    SharedModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreModule.forFeature(fromGrade.gradesFeatureKey, fromGrade.reducer),
    EffectsModule.forFeature([GradeEffects, SectionEffects]),
    StoreModule.forFeature(fromSection.sectionFeatureKey, fromSection.reducer)
  ]
})
export class RegistraModule {}
