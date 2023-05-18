import { Department } from "./department";

export class Student {
    constructor(public id: number = 1, public name: string = "", public age: number = 20,
        public deptNo: Department['id'] = 1, public email: string = "") { }
}
