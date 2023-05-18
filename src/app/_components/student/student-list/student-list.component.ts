import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  sub: Subscription | null = null;

  constructor(public stdService: StudentService) { }

  ngOnInit(): void {
    this.sub = this.stdService.getAllStudents().subscribe(data => {
      this.students = data;
    })
  }

  ngOnDestroy():void{
    this.sub?.unsubscribe();
  }

}
