import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL: string = "https://localhost:7255/api/student/";

  constructor(public http: HttpClient) { }

  getAllStudents() {
    return this.http.get<Student[]>(this.baseURL);
  }

  getStudent(id: number) {
    return this.http.get<Student>(this.baseURL + id);
  }

  addStudent(std: Student) {
    return this.http.post<Student>(this.baseURL, std);
  }

  updateStudent(std: Student) {
    return this.http.put<Student>(this.baseURL + std.id, std);
  }

  deleteStudent(id: number) {
    return this.http.delete<Student>(this.baseURL + id);
  }

}
