import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit, OnDestroy {

  constructor(public deptService: DepartmentService, private ac: ActivatedRoute) { }

  deptId = 1;
  dept: Department | null = null;
  sub: Subscription | null = null;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.deptService.getDepartment(data['id']).subscribe(dt => {
        this.dept = dt;
      });
    })
  }
}
