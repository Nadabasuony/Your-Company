import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnDestroy {

  students: Student = new Student();
  sub: Subscription | null = null;

  constructor(public stdService: StudentService, public ac: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.stdService.getStudent(data['id']).subscribe(dt => {
        this.students = dt;
      })
    })
  }

  update() {
    this.sub = this.stdService.updateStudent(this.students).subscribe(data => {
      this.students = data;
      this.router.navigateByUrl("/students");
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
