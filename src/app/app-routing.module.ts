import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('src/app/user/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'director',
    loadChildren: () =>
      import('src/app/user/director/director.module').then(mod => mod.DirectorModule)
  },
  {
    path: 'registra',
    loadChildren: () =>
      import('src/app/user/registra/registra.module').then(mod => mod.RegistraModule)
  },
  {
    path: 'finace',
    loadChildren: () => import('src/app/user/finace/finace.module').then(mod => mod.FinaceModule)
  },
  {
    path: 'lecture',
    loadChildren: () => import('src/app/user/lecture/lecture.module').then(mod => mod.LectureModule)
  },
  {
    path: 'student',
    loadChildren: () => import('src/app/user/student/student.module').then(mod => mod.StudentModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('src/app/user/parent/parent.module').then(mod => mod.ParentModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
