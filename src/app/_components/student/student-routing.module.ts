import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";
import { StudentDeleteComponent } from "./student-delete/student-delete.component";
import { StudentAddComponent } from "./student-add/student-add.component";

const routes: Routes = [
  {
    path: '', component: StudentListComponent, children: [
      { path: 'details/:id', component: StudentDetailsComponent }
    ]
  },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'delete/:id', component: StudentDeleteComponent },
  { path: 'add', component: StudentAddComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule {

}