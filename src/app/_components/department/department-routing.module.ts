import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { DepartmentAddComponent } from './department-add/department-add.component';

const routes: Routes = [
    {
        path: '', component: DepartmentListComponent, children: [
            { path: 'details/:id', component: DepartmentDetailsComponent },
        ]
    },
    { path: 'edit/:id', component: DepartmentEditComponent },
    { path: 'delete/:id', component: DepartmentDeleteComponent },
    { path: 'add', component: DepartmentAddComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DepartmentRoutingModule {

}