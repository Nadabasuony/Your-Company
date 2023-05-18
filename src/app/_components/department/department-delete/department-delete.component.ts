import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnDestroy {

  constructor(public deptService: DepartmentService, private ac: ActivatedRoute, private router: Router) { }

  dept: Department | null = null;
  sub: Subscription | null = null;

  
  ngOnInit():void{
    this.sub= this.ac.params.subscribe(data=>{
      this.deptService.getDepartment(data['id']).subscribe(dt=>{
        this.dept=dt;
      })
    })
  }
  
  delete() {
    this.sub= this.ac.params.subscribe(data=>{
      this.deptService.deleteDepartment(data['id']).subscribe(dt=>{
        this.router.navigateByUrl('/departments');
      });
    })
  }
  
  cancel(){
    this.router.navigateByUrl('/departments');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
