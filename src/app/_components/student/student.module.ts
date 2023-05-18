import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentListComponent } from './student-list/student-list.component';

import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    StudentDeleteComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    StudentRoutingModule,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    StudentDeleteComponent,
    StudentListComponent
  ]
})
export class StudentModule { }
