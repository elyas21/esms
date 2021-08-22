import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director.component';
import { RegistraComponent } from './com/registra/registra.component';
import { SharedModule } from '../../shared/shared.module';
import { AddComponent } from './com/finace/add/add.component';
import { ViewComponent } from './com/finace/view/view.component';
import { DetailComponent } from './com/finace/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { FinaceService } from '../../service/user/finace.service';
import { RegistraAddComponent } from './com/registra/registra-add/registra-add.component';
import { RegistraViewComponent } from './com/registra/registra-view/registra-view.component';
import { RegistraDetailComponent } from './com/registra/registra-detail/registra-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FinaceComponent } from './com/finace/finace.component';
import { AddClassYearComponent } from './com/classYear/add-class-year/add-class-year.component';
import { ViewClassYearComponent } from './com/classYear/view-class-year/view-class-year.component';
import { ClassYearComponent } from './com/classYear/class-year.component';
import { ClassYearDetailComponent } from './com/classYear/class-year-detail/class-year-detail.component';
import { SemisterComponent } from './com/semister/semister.component';
import { AddSemisterComponent } from './com/semister/add-semister/add-semister.component';
import { ViewSemisterComponent } from './com/semister/view-semister/view-semister.component';
import { SemisterDetailComponent } from './com/semister/semister-detail/semister-detail.component';
import { SettingComponent } from './com/setting/setting.component';

@NgModule({
  declarations: [
    DirectorComponent,
    RegistraComponent,
    AddComponent,
    FinaceComponent,
    ViewComponent,
    DetailComponent,
    RegistraAddComponent,
    RegistraViewComponent,
    RegistraDetailComponent,
    AddClassYearComponent,
    ViewClassYearComponent,
    ClassYearComponent,
    ClassYearDetailComponent,
    SemisterComponent,
    AddSemisterComponent,
    ViewSemisterComponent,
    SemisterDetailComponent,
    SettingComponent
  ],
  imports: [CommonModule, DirectorRoutingModule, SharedModule, FormsModule, MatSnackBarModule],
  providers: [FinaceService]
})
export class DirectorModule {}
