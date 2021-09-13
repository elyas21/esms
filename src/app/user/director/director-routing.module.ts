import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorComponent } from './director.component';
import { AuthGuard, DirectorGuard } from 'src/app/helpers';
import { RegistraComponent } from './com/registra/registra.component';
import { ClassYearComponent } from './com/classYear/class-year.component';
import { ViewComponent } from './com/finace/view/view.component';
import { DetailComponent } from './com/finace/detail/detail.component';
import { AddComponent } from './com/finace/add/add.component';
import { RegistraViewComponent } from './com/registra/registra-view/registra-view.component';
import { RegistraDetailComponent } from './com/registra/registra-detail/registra-detail.component';
import { RegistraAddComponent } from './com/registra/registra-add/registra-add.component';
import { FinaceComponent } from './com/finace/finace.component';
import { ViewClassYearComponent } from './com/classYear/view-class-year/view-class-year.component';
import { ClassYearDetailComponent } from './com/classYear/class-year-detail/class-year-detail.component';
import { AddClassYearComponent } from './com/classYear/add-class-year/add-class-year.component';
import { SemisterComponent } from './com/semister/semister.component';
import { ViewSemisterComponent } from './com/semister/view-semister/view-semister.component';
import { SemisterDetailComponent } from './com/semister/semister-detail/semister-detail.component';
import { AddSemisterComponent } from './com/semister/add-semister/add-semister.component';
import { SettingComponent } from './com/setting/setting.component';
import { StaffComponentComponent } from './com/staff/staff-component.component';
import { ViewStaffComponent } from './com/staff/view-staff/view-staff.component';
import { DetailStaffComponent } from './com/staff/detail-staff/detail-staff.component';
import { AddStaffComponent } from './com/staff/add-staff/add-staff.component';

const routes: Routes = [
  {
    path: '',
    component: DirectorComponent,
    canActivate: [AuthGuard, DirectorGuard]
  },
  {
    path: 'registra',
    component: RegistraComponent,
    canActivate: [AuthGuard, DirectorGuard],
    children: [
      {
        path: '',
        component: RegistraViewComponent
      },
      {
        path: 'view',
        component: RegistraViewComponent
      },
      {
        path: 'detail',
        component: RegistraDetailComponent
      },
      {
        path: 'detail/:id',
        component: RegistraDetailComponent
      },
      {
        path: 'add',
        component: RegistraAddComponent
      }
    ]
  },
  {
    path: 'finace',
    component: FinaceComponent,
    canActivate: [AuthGuard, DirectorGuard],
    children: [
      {
        path: '',
        component: ViewComponent
      },
      {
        path: 'view',
        component: ViewComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  },
  {
    path: 'staff',
    component: StaffComponentComponent,
    canActivate: [AuthGuard, DirectorGuard],
    children: [
      {
        path: '',
        component: ViewStaffComponent
      },
      {
        path: 'view',
        component: ViewStaffComponent
      },
      {
        path: 'detail',
        component: DetailStaffComponent
      },
      {
        path: 'detail/:id',
        component: DetailStaffComponent
      },
      {
        path: 'add',
        component: AddStaffComponent
      }
    ]
  },
  {
    path: 'class-year',
    component: ClassYearComponent,
    canActivate: [AuthGuard, DirectorGuard],
    children: [
      {
        path: '',
        component: ViewClassYearComponent
      },
      {
        path: 'view',
        component: ViewClassYearComponent
      },
      {
        path: 'detail',
        component: ClassYearDetailComponent
      },
      {
        path: 'detail/:id',
        component: ClassYearDetailComponent
      },
      {
        path: 'add',
        component: AddClassYearComponent
      }
    ]
  },
  {
    path: 'semister',
    component: SemisterComponent,
    canActivate: [AuthGuard, DirectorGuard],
    children: [
      {
        path: '',
        component: ViewSemisterComponent
      },
      {
        path: 'view',
        component: ViewSemisterComponent
      },
      {
        path: 'detail',
        component: SemisterDetailComponent
      },
      {
        path: 'detail/:id',
        component: SemisterDetailComponent
      },
      {
        path: 'add',
        component: AddSemisterComponent
      }
    ]
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule {}
