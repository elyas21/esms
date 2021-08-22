import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentViewAdvaceDataSource } from './student-view-advace-datasource';

@Component({
  selector: 'app-student-view-advace',
  templateUrl: './student-view-advace.component.html',
  styleUrls: ['./student-view-advace.component.css']
})
export class StudentViewAdvaceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: StudentViewAdvaceDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new StudentViewAdvaceDataSource(this.paginator, this.sort);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
}
