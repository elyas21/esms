import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LectureService } from 'src/app/service/user/lecture.service';

@Component({
  selector: 'app-lecture-view',
  templateUrl: './lecture-view.component.html',
  styleUrls: ['./lecture-view.component.scss']
})
export class LectureViewComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  teacherId;
  teacherName;
  editRow = false;
  constructor(public lecSer: LectureService) {
    this.subscription = this.lecSer.getAllBySchool().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {}
  getAll() {
    this.lecSer.getAll().subscribe(res => {
      console.log(res);
    });
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
      this.dataSource.splice(i, 1);
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
