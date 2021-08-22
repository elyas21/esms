import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { AttendanceService } from 'src/app/service/user/attendance.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
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
@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss']
})
export class ChooseDateComponent implements OnInit {
  days;
  months;
  selectedDay;
  seletedMonth;
  slectedSection;
  dataSource: Array<any>;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private attdSer: AttendanceService
  ) {}

  ngOnInit() {
    this.days = days;
    this.months = months;
    this.seletedMonth = 1;
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => (this.slectedSection = params.get('id'))))
      .subscribe(res => console.log(res));
    console.log(this.slectedSection);
  }

  gotFiller(month, day) {
    this.selectedDay = day;
    this.seletedMonth = month;
    console.log(this.auth.currentUserValue.School.currentClassYear);
    console.log(day);
    console.log(month);
    console.log(this.slectedSection);
    this.attdSer
      .getAttendaceBySectionDayClassYear(this.slectedSection, month, day)
      .pipe(
        map(results => {
          console.log(results);
          let p = [];
          const k = results.forEach(element => {
            console.log(element);
            p.push(
              mapKeys(element, (value, key) => {
                if (key == day) {
                  return 'day';
                }
                return key;
              })
            );
          });

          return p;
        })
      )
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }

  updateAttendace(d) {
    const data = mapKeys(d, (value, key) => {
      if (key == 'day') {
        return this.selectedDay;
      }
      return key;
    });
    console.log(data);
    this.attdSer.update(data).subscribe(res => {
      console.log(res);
    });
  }
}
