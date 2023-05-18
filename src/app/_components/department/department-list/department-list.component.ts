import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit, OnDestroy {

  sub: Subscription | null = null;
  departments: Department[] = [];
  
  constructor(public deptService: DepartmentService) { }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.deptService.getAll().subscribe(data=>{
      this.departments = data;
    });
  }

}
