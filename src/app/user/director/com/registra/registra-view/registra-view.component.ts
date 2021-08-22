import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistraService } from 'src/app/service/user/registra.service';

@Component({
  selector: 'app-registra-view',
  templateUrl: './registra-view.component.html',
  styleUrls: ['./registra-view.component.scss']
})
export class RegistraViewComponent implements OnInit {
  dataSource;
  subscription: Subscription;
  id;
  collegeHeadId;
  editRow = false;

  constructor(public regSer: RegistraService) {
    this.subscription = this.regSer.getAll().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {}
  getAll() {
    this.regSer.getAll().subscribe(res => {
      console.log(res);
    });
  }
  update(user) {
    user.id = user.registraId;
    console.log(user);
    this.regSer.update(user).subscribe(res => {
      console.log(res);
    });
  }
  create(user: any, i: number) {
    this.regSer.create(user).subscribe(res => {
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
      registraId: '00021',
      registraName: 'new formd',
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
      this.regSer.delete(user.registraId).subscribe(res => {
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
