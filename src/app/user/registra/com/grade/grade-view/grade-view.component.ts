import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GradeService } from 'src/app/service/user/grade.service';

@Component({
  selector: 'app-grade-view',
  templateUrl: './grade-view.component.html',
  styleUrls: ['./grade-view.component.scss']
})
export class GradeViewComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  gradeId;
  editRow = false;
  constructor(public gradeSer: GradeService) {
    this.subscription = this.gradeSer.getAllBySchool().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {}
  getAll() {
    this.gradeSer.getAll().subscribe(res => {
      console.log(res);
    });
  }
  update(user) {
    user.id = user.finaceId;
    console.log(user);
    this.gradeSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any, i: number) {
    this.gradeSer.create(user).subscribe(res => {
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
      this.dataSource.splice(i, 1);
      // this.dataSource.reduce(user.i)
    }
  }
  remove(user: any, i: number) {
    console.log(user);
    const ci = confirm('are u shure');
    if (ci) {
      this.gradeSer.delete(user.gradeId).subscribe(res => {
        if (res) {
          if (res.hasOwnProperty('removed')) {
            this.dataSource.splice(i, 1);
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
