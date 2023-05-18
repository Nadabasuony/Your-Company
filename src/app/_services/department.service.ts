import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseURL: string = "https://localhost:7255/api/department/";

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<Department[]>(this.baseURL);
  }

  getDepartment(id: number) {
    return this.http.get<Department>(this.baseURL + id);
  }

  addDepartment(department: Department) {
    return this.http.post<Department>(this.baseURL, department);
  }

  updateDepartment(department: Department) {
    return this.http.put<Department>(this.baseURL + department.id, department);
  }

  deleteDepartment(id: number) {
    return this.http.delete<Department>(this.baseURL + id);
  }










  // dept: Department[] = [
  //   new Department(1, "Sales", "Tanta"),
  //   new Department(2, "HR", "Alexandria"),
  //   new Department(3, "IT", "Cairo"),
  //   new Department(4, "Finance", "Assuit"),
  //   new Department(5, "Marketing", "Mansoura"),
  // ];

  // getAll() {
  //   return this.dept;
  // }

  // addDepartment(department: Department) {
  //   this.dept.push(department);
  // }

  // getDepartment(id: number): Department | null {
  //   for (let i = 0; i < this.dept.length; i++) {
  //     if (this.dept[i].id == id) {
  //       return this.dept[i];
  //     }
  //   }
  //   return null;
  // }

  // updateDepartment(d: Department, id: number) {
  //   for (let i = 0; i < this.dept.length; i++) {
  //     if (this.dept[i].id == id) {
  //       this.dept[i].name = d.name;
  //       this.dept[i].loc = d.loc;
  //       break;
  //     }
  //   }
  // }

  // deleteDepartment(id: number): Department | null {
  //   for (let i = 0; i < this.dept.length; i++) {
  //     if (this.dept[i].id == id) {
  //       let x = this.getDepartment(this.dept[i].id)
  //       this.dept.splice(i, 1);
  //       return x;
  //     }
  //   }
  //   return null;
  // }
}
