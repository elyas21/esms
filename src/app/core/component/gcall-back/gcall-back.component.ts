import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../serivice/auth.service';

@Component({
  selector: 'app-gcall-back',
  templateUrl: './gcall-back.component.html',
  styleUrls: ['./gcall-back.component.scss']
})
export class GcallBackComponent implements OnInit {
  constructor(
    private aroute: ActivatedRoute,
    private authSer: AuthService,
    private route: Router,
    private http: HttpClient
  ) {
    this.aroute.queryParams.subscribe(params => {
      this.route.navigateByUrl(environment.hostname + 'api/auth/google');
      this.http.post(environment.hostname + 'api/auth/google/callback', params).subscribe(data => {
        console.log(data);
        this.authSer.savegoogleUser(data);
      });
    });
  }
  ngOnInit(): void {}
}
