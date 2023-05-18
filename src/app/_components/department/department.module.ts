import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DepartmentRoutingModule,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    DepartmentDeleteComponent
  ]
})
export class DepartmentModule { }
