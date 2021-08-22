import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/service/user/student.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  studentId;
  editRow = false;
  pageSize;
  page;
  data;
  noPage;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public stuSer: StudentService
  ) {}
  ngOnInit() {
    console.log('thissssssssss');
    // const pageSize =parseInt(this)
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.pageSize = params.get('pageSize')
            ? // tslint:disable-next-line: radix
              parseInt(params.get('pageSize'))
            : 4;
          // tslint:disable-next-line: radix
          this.page = params.get('pageSize') ? parseInt(params.get('page')) : 0;
          return this.stuSer.getAllPaginated(this.pageSize, this.page);
        })
      )
      .subscribe(res => {
        this.data = res;
        this.dataSource = this.data.students;
        console.log(this.data.count);
        this.noPage = this.data.count / this.pageSize - 0.5;
        this.noPage = Math.round(this.noPage);
        // console.log(res.count);
      });
  }

  update(user) {
    user.id = user.finaceId;
    console.log(user);
    this.stuSer.update(user).subscribe(res => {
      console.log(res);
    });
  }

  selectedUser(user: any, event: any) {
    console.log(user);
    user.flag = !user.flag;
    if (!user.flag) {
      console.log('uppppppppppppppppp');
      this.update(user);
    }
    console.log(user + user.flag);
  }

  cancleUpdate(user: any, event?: any, isNew?: boolean, i?: number) {
    user.flag = !user.flag;
    if (isNew) {
      console.log(user);
      this.dataSource.splice(i, 1);
      // this.dataSource.reduce(user.i)
    }
  }
  remove(user: any, i: number) {
    console.log(user);
    const ci = confirm('are u shure');
    if (ci) {
      this.stuSer.delete(user.finaceId).subscribe(res => {
        if (res) {
          if (res.hasOwnProperty('removed')) {
            this.dataSource.splice(i, 1);
          }
        }
      });
    }
  }

  naved(page) {
    this.page = page;
    this.router.navigate(['registra', 'student', 'view', this.pageSize, this.page]);
  }
}
