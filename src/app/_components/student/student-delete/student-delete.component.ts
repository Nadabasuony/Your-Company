import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit, OnDestroy {

  students: Student | null = null;
  sub: Subscription | null = null;

  constructor(public stdService: StudentService, public ac: ActivatedRoute, public router: Router) { }
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.stdService.getStudent(data['id']).subscribe(dt => {
        this.students = dt;
      })
    })
  }

  delete() {
    this.sub = this.ac.params.subscribe(data => {
      this.stdService.deleteStudent(data['id']).subscribe(dt => {
        this.router.navigateByUrl('/students');
      });
    })
  }

  cancel(){
    this.router.navigateByUrl('/students');
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
