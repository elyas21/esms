import { Component, OnInit, OnDestroy } from '@angular/core';
import { FinaceService } from '../../../../../service/user/finace.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  finaceMan;
  id;

  constructor(private route: ActivatedRoute, private finSer: FinaceService) {}

  ngOnInit() {}

  onSubmit() {
    this.finaceMan = this.finSer.get(this.id);
  }
}
