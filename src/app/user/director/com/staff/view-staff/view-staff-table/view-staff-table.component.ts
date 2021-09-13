import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/model/User';
import { ViewStaffTableDataSource } from './view-staff-table-datasource';
import * as fromStaffActions from '../../../../store/actions/staff.actions';
import * as StaffSelector from '../../../../store/selectors/staff.selectors';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-view-staff-table',
  templateUrl: './view-staff-table.component.html',
  styleUrls: ['./view-staff-table.component.scss']
})
export class ViewStaffTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Staff>;
  dataSource: ViewStaffTableDataSource;
  @Input() staffs: Staff[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Id', 'FirstName', 'MiddleName', 'LastName', 'Role'];

  constructor(private store: Store) {}

  ngOnInit() {
    this.dataSource = new ViewStaffTableDataSource(this.staffs);
    console.log(this.dataSource);
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // }
  }
}
