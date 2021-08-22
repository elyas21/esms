import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SectionService } from 'src/app/service/user/section.service';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss']
})
export class SectionDetailComponent implements OnInit {
  section;
  dataSource;
  subscription: Subscription;
  mySec: Observable<any>;
  id;
  dataSo;
  currentUser: User;
  constructor(
    private authenticationService: AuthService,
    private stuSer: SectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.mySec = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.stuSer.getOneBySchoolClassYear(params.get('id')))
    );
    this.mySec.subscribe(res => {
      this.section = res;
      this.dataSource = this.section.Students;

      console.log(res);
    });
    console.log(this.mySec);
  }

  onSubmit() {
    this.stuSer.getOneBySchoolClassYear(this.id).subscribe(res => {
      this.section = res;
      this.dataSource = this.section.Students;
    });
  }
}
