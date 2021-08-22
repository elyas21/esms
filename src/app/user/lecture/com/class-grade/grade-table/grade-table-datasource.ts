import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type

export interface StudentGrading {
  student?: string;
  term?: number;
  midExam?: number;
  status?: string;
  finalExam: number;
  expectedGrade: number;
  sttudentGrade: number;
}

// TODO: replace this with real data from your application
// const EXAMPLE_DATA: StudentGrading[] = [
//   {
//     student: 'df',
//     term: 3
//   }
// ];

/**
 * Data source for the GradeTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GradeTableDataSource extends DataSource<StudentGrading> {
  data: StudentGrading[];
  paginator: MatPaginator;
  sort: MatSort;
  stuData: StudentGrading;
  constructor(d: Array<StudentGrading>) {
    super();
    this.data = d;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<StudentGrading[]> {
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
  private getPagedData(data: StudentGrading[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: StudentGrading[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'student':
          return compare(a.student, +b.student, isAsc);
        case 'term':
          return compare(+a.term, b.term, isAsc);
        case 'midExam':
          return compare(+a.midExam, b.term, isAsc);
        case 'finalExam':
          return compare(+a.finalExam, b.term, isAsc);
        case 'sttudentGrade':
          return compare(+a.sttudentGrade, b.term, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
