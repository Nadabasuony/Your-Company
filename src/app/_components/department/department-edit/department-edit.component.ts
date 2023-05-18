import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  constructor(public deptService: DepartmentService, private ac: ActivatedRoute, private router: Router) { }

  departments: Department = new Department();
  sub: Subscription | null = null;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.deptService.getDepartment(data['id']).subscribe(dt => {
        this.departments = dt;
      })
    })
  }

  Update() {
    this.sub = this.deptService.updateDepartment(this.departments).subscribe(data => {
      this.departments = data
      this.router.navigateByUrl("/departments");
    });
  }
}
