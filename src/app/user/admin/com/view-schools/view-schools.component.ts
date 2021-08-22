import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { SchoolService } from 'src/app/service/user/school.service';

@Component({
  selector: 'app-view-schools',
  templateUrl: './view-schools.component.html',
  styleUrls: ['./view-schools.component.scss']
})
export class ViewSchoolsComponent implements OnInit {
  private subs = new SubSink();
  schoolId;
  dataSource;
  constructor(private scSer: SchoolService) {}

  ngOnInit() {
    this.scSer.getAll().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    });
  }
}
