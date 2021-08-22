import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GradeTableDataSource, StudentGrading } from './grade-table-datasource';
import { CourseGradeingService } from 'src/app/service/user/course-gradeing.service';

@Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.scss']
})
export class GradeTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<StudentGrading>;
  dataSource: GradeTableDataSource;
  @Input() stuGrading: StudentGrading[];

  constructor(private courseGradingSer: CourseGradeingService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['student', 'id', 'term', 'midExam', 'finalExam', 'sttudentGrade', 'status'];

  ngOnInit() {
    this.dataSource = new GradeTableDataSource(this.stuGrading);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  updateStatus(d, status) {
    console.log(d.student + status);
    this.courseGradingSer
      .update({
        id: d.id,
        status
      })
      .subscribe(res => console.log(res));
  }

  coloring(rows, s) {
    if (rows === s) {
      return true;
    }
    return false;
  }
}
