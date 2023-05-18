import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnDestroy{
  
  deptAdd: Department = new Department();
  sub: Subscription | null = null;
  
  constructor(public deptService: DepartmentService, 
    private router: Router) { }
  
  Add() {
    this.sub = this.deptService.addDepartment(this.deptAdd).subscribe(data => {
      this.router.navigateByUrl("/departments");
    });
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
