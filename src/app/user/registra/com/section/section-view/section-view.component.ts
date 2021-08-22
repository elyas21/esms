import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionService } from 'src/app/service/user/section.service';
import { LectureService } from 'src/app/service/user/lecture.service';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  studentId;
  lectureList;
  editRow = false;
  constructor(public secSer: SectionService, private lecSer: LectureService) {
    this.subscription = this.secSer.getAllBySchoolClassYear().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {
    this.lecSer.getAllBySchool().subscribe(res => {
      this.lectureList = res;
    });
  }
  getAll() {
    // this.secSer.getAllBySchoolClassYear().subscribe(res => {
    //   console.log(res);
    // });
  }
  update(user) {
    console.log(user);
    this.secSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any, i: number) {
    this.secSer.create(user).subscribe(res => {
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
      this.secSer.delete(user.finaceId).subscribe(res => {
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
