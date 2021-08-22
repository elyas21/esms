import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SchoolAddComponent } from './com/school-add/school-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewSchoolsComponent } from './com/view-schools/view-schools.component';
import { SchoolDetailComponent } from './com/school-detail/school-detail.component';
import { SchoolViewDetialComponent } from './com/school-view-detial/school-view-detial.component';

@NgModule({
  declarations: [
    AdminComponent,
    SchoolAddComponent,
    ViewSchoolsComponent,
    SchoolDetailComponent,
    SchoolViewDetialComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, AdminRoutingModule]
})
export class AdminModule {}
