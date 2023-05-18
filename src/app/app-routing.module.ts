import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';

const routes: Routes = [
  {
    path: 'departments', loadChildren: () =>
    import('./_components/department/department.module')
    .then(m => m.DepartmentModule)
  },
  {
    path: 'students', loadChildren: () =>
    import('./_components/student/student.module')
    .then(m => m.StudentModule)
  },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
