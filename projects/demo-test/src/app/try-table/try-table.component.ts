import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TryTableDataSource } from './try-table-datasource';

@Component({
  selector: 'app-try-table',
  templateUrl: './try-table.component.html',
  styleUrls: ['./try-table.component.css']
})
export class TryTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TryTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new TryTableDataSource(this.paginator, this.sort);
  }
}
