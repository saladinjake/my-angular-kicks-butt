import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './sample.model';

@Injectable()
export class EmployeeService {
  //one way to declear attributes of a class
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { } // another way to declear attributes of a class by dependencies injection of  a contructor
  //C: create
  postEmployee(emp: Employee) { // dependency injection for a method
    return this.http.post(this.baseURL, emp);  // this returns a promise
  }
  //R: read
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  //U: update
  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  //D: delete
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
