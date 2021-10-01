import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GradeService } from 'src/app/service/user/grade.service';
import { SectionService } from 'src/app/service/user/section.service';
import * as fromGradeAction from '../../store/actions/grade.actions';
import * as fromGradeSelector from '../../store/selectors/grade.selectors';
import * as fromSectionAction from '../../store/actions/section.actions';
import * as fromSectionSelector from '../../store/selectors/section.selectors';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  subscription: Subscription;
  grades;
  sections;
  grades$: Observable<any>;
  sections$: Observable<any>;
  constructor(
    private gradeSer: GradeService,
    private secSer: SectionService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.grades = res;
      console.log(this.grades);
    });
    this.store.dispatch(fromGradeAction.loadGrades());
    this.grades$ = this.store.pipe(select(fromGradeSelector.selectGradeViewModel));
  }

  getSections(id) {
    this.secSer.getAllBySchoolGradeClassYear(id).subscribe(res => {
      this.sections = res;
      console.log(this.sections);
    });
  }
  getSectionss(id) {
    this.store.dispatch(fromSectionAction.loadSections({ id: id }));
    this.sections$ = this.store.pipe(select(fromSectionSelector.selectIsLoggedIn));
  }
  getSchedule(sectionId) {
    console.log(sectionId);
  }
}
