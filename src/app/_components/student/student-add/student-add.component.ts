import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnDestroy{

  students: Student = new Student(0,"",0,0,"");
  sub: Subscription | null = null;

  constructor(public stdService: StudentService,
    private router: Router) { }

  add() {
    this.sub = 
    this.stdService.addStudent(this.students).subscribe(data => {
      this.router.navigateByUrl("/students");
    });
  }

   ngOnDestroy(): void { this.sub?.unsubscribe();}

}
