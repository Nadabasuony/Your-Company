import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {

  students: Student | null = null;
  sub: Subscription | null = null;

  constructor(public stdService: StudentService, public ac: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.stdService.getStudent(data['id']).subscribe(dt => {
        this.students = dt;
      })
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
