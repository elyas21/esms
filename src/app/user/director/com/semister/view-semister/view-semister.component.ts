import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SemisterService } from 'src/app/service/user/semister.service';

@Component({
  selector: 'app-view-semister',
  templateUrl: './view-semister.component.html',
  styleUrls: ['./view-semister.component.scss']
})
export class ViewSemisterComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  collegeHeadId;
  editRow = false;
  constructor(public SemisterSer: SemisterService) {
    this.subscription = this.SemisterSer.getAll().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {}
  getAll() {
    this.SemisterSer.getAll().subscribe(res => {
      console.log(res);
    });
  }
  update(user) {
    console.log(user);
    this.SemisterSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any, i: number) {
    this.SemisterSer.create(user).subscribe(res => {
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

  addNewRow() {
    // this.dataSource.push({});
    this.dataSource.push({
      collegeId: '00021',
      collegeName: 'new formd',
      isNew: true,
      flag: true
    });
    // this.cancleUpdate(this.dataSource[this.dataSource.length])
    // this.cancleUpdate(this.dataSource[this.dataSource.length - 1], null, true);
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
      this.SemisterSer.delete(user.finaceId).subscribe(res => {
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
