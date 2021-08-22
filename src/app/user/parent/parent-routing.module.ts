import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';
import { AuthGuard, ParentGuard } from 'src/app/helpers';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    canActivate: [AuthGuard, ParentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule {}
