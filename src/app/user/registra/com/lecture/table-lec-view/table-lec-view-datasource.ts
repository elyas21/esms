import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { LectureService } from 'src/app/service/user/lecture.service';

// TODO: Replace this with your own data model type
export interface TableLecViewItem {
  teacherId?: string;
  teacherName?: string;
  isNew: boolean;
  flag: boolean;
}

// TODO: replace this with real data from your application

/**
 * Data source for the TableLecView view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableLecViewDataSource extends DataSource<TableLecViewItem> {
  data: TableLecViewItem[];
  paginator: MatPaginator;
  sort: MatSort;
  stuData: TableLecViewItem;
  constructor(d: Array<TableLecViewItem>, public lecSer?: LectureService) {
    super();
    this.data = d;
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableLecViewItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [observableOf(this.data), this.paginator.page, this.sort.sortChange];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableLecViewItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableLecViewItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.teacherId, b.teacherId, isAsc);
        case 'id':
          return compare(+a.teacherName, +b.teacherName, isAsc);
        default:
          return 0;
      }
    });
  }

  public update(user) {
    user.id = user.teacherId;
    console.log(user);
    this.lecSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  public create(user: any, i: number) {
    this.lecSer.create(user).subscribe(res => {
      if (res.hasOwnProperty('regsterd')) {
        this.data[i].isNew = false;
        this.data[i].flag = false;
      }
      console.log(res);
    });
  }

  public selectedUser(user: any, event: any) {
    console.log(user);
    user.flag = !user.flag;
    if (!user.flag) {
      this.update(user);
    }
    console.log(user + user.flag);
  }

  public cancleUpdate(user: any, event?: any, isNew?: boolean, i?: number) {
    user.flag = !user.flag;
    if (isNew) {
      console.log(user);
      this.data.splice(i, 1);
      // this.data.reduce(user.i)
    }
  }
  public remove(user: any, i: number) {
    console.log(user);
    const ci = confirm('are u shure');
    if (ci) {
      this.lecSer.delete(user.teacherId).subscribe(res => {
        if (res) {
          if (res.hasOwnProperty('removed')) {
            this.data.splice(i, 1);
          }
        }
      });
    }
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
