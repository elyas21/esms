import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/service/user/attendance.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { mapKeys } from 'lodash';

const days = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
];
const months = [
  { no: 1, name: 'Meskerm' },
  { no: 2, name: 'Tikimt' },
  { no: 3, name: 'Hdart' },
  { no: 4, name: 'Tahsas' },
  { no: 5, name: 'Tir' },
  { no: 6, name: 'Yekatit' },
  { no: 7, name: 'Megabit' },
  { no: 8, name: 'Miziaya' },
  { no: 9, name: 'Ginbot' },
  { no: 10, name: 'Sene' },
  { no: 11, name: 'Hamle' },
  { no: 12, name: 'Nehase' }
];
export interface attd {
  day1;
  day2;
  day3;
  day4;
  day5;
  day6;
  day7;
  day8;
  day9;
  day10;
  day11;
  day12;
  day13;
  day14;
  day15;
  day16;
  day17;
  day18;
  day19;
  day20;
  day21;
  day22;
  day23;
  day24;
  day25;
  day26;
  day27;
  day28;
  day29;
  day30;
  id: 53;
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  days;
  months;
  seletedMonth;
  page = 1;
  monthAttd: attd;
  m: Array<any>;
  constructor(private attd: AttendanceService, private auth: AuthService) {}

  ngOnInit() {
    this.months = months;
    this.seletedMonth = 1;
    this.days = days;
  }

  monthAdd(page) {
    this.page = page;
    console.log(this.page);
    this.attd
      .getAllByMonth(
        this.auth.currentUserValue.userId,
        this.auth.currentUserValue.Studentsections,
        page
      )
      .subscribe(res => {
        let p = [];
        let u = [];
        p.push(
          mapKeys(res, (value, key) => {
            if (!isNaN(parseInt(key))) {
              u.push({ day: value });
              return 'day' + key;
            }
            return key;
          })
        );
        this.m = u;
        this.monthAttd = p[0];
        // console.log(thim);
        return p[0];
      });
  }
  coloring(item, a) {
    if (item === a) {
      return true;
    }
    return false;
  }
}
