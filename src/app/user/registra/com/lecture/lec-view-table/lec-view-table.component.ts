import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LecViewTableDataSource, LecViewTableItem } from './lec-view-table-datasource';
import { LectureService } from 'src/app/service/user/lecture.service';

@Component({
  selector: 'app-lec-view-table',
  templateUrl: './lec-view-table.component.html',
  styleUrls: ['./lec-view-table.component.scss']
})
export class LecViewTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<LecViewTableItem>;
  dataSource: LecViewTableDataSource;
  @Input() cData: LecViewTableItem[];

  constructor(public lecSer: LectureService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['teacherId', 'teacherName'];

  ngOnInit() {
    console.log(this.cData);
    this.dataSource = new LecViewTableDataSource(this.cData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  update(user) {
    user.id = user.teacherId;
    console.log(user);
    this.lecSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any, i: number) {
    this.lecSer.create(user).subscribe(res => {
      if (res.hasOwnProperty('regsterd')) {
        this.dataSource[i].isNew = false;
        this.dataSource[i].flag = false;
      }
      console.log(res);
    });
  }

  selectedUser(user: any, event: any) {
    console.log(user);
    user.flag = !user.flag;
    if (!user.flag) {
      this.update(user);
    }
    console.log(user + user.flag);
  }

  cancleUpdate(user: any, event?: any, isNew?: boolean, i?: number) {
    user.flag = !user.flag;
    if (isNew) {
      console.log(user);
      // this.dataSource.splice(i, 1);
      // this.dataSource.reduce(user.i)
    }
  }
  remove(user: any, i: number) {
    console.log(user);
    const ci = confirm('are u shure');
    if (ci) {
      this.lecSer.delete(user.teacherId).subscribe(res => {
        if (res) {
          if (res.hasOwnProperty('removed')) {
            // this.dataSource.splice(i, 1);
          }
        }
      });
    }
  }
}
