import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/app/helpers';
import { AdminGuard } from 'src/app/helpers/admin.guard';
import { SchoolAddComponent } from './com/school-add/school-add.component';
import { ViewSchoolsComponent } from './com/view-schools/view-schools.component';
import { SchoolDetailComponent } from './com/school-detail/school-detail.component';
import { SchoolViewDetialComponent } from './com/school-view-detial/school-view-detial.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'add-school',
    component: SchoolAddComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'view-school',
    component: ViewSchoolsComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'school-detial',
    component: SchoolDetailComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'school-detial/:id',
    component: SchoolViewDetialComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
