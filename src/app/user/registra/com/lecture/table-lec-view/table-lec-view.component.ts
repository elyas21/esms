import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableLecViewDataSource, TableLecViewItem } from './table-lec-view-datasource';
import { LectureService } from 'src/app/service/user/lecture.service';

@Component({
  selector: 'app-table-lec-view',
  templateUrl: './table-lec-view.component.html',
  styleUrls: ['./table-lec-view.component.scss']
})
export class TableLecViewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TableLecViewItem>;
  dataSource: TableLecViewDataSource;
  @Input() cData;
  // /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'crudder'];
  constructor(public lecSer: LectureService) {}

  ngOnInit() {
    console.log(this.cData);
    this.dataSource = new TableLecViewDataSource(this.cData);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
