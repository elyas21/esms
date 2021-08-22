import { Component, OnInit } from '@angular/core';
import { FinaceService } from '../../../../../service/user/finace.service';
import { ActivatedRoute } from '@angular/router';
import { RegistraService } from 'src/app/service/user/registra.service';

@Component({
  selector: 'app-registra-detail',
  templateUrl: './registra-detail.component.html',
  styleUrls: ['./registra-detail.component.scss']
})
export class RegistraDetailComponent implements OnInit {
  registraId;
  id;
  constructor(private route: ActivatedRoute, private registraSer: RegistraService) {}

  ngOnInit() {}

  onSubmit() {
    this.registraId = this.registraSer.get(this.id);
  }
}
