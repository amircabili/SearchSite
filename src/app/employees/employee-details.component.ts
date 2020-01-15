import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})

export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  public _id: any;

  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router
  ) { }

  ngOnInit() {

    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');

      this._employeeService.getEmployees().subscribe(data => {
        this.employees = data;
        this.employee = this.employees[this._id - 1];
      })
      this._router.navigate(['/employees', this._id])
    });

    // this._router.navigate(['/employees', this._id])
    console.log('this._route.snapshot.paramMap - id ------- ' + this._id)
    console.log('this.employee ------- ' + this.employee);
  }

  viewNextEmployee() {
    if (this._id < this.employees.length) {
      this._id = this._id + 1;
      this._router.navigate(['/employees', this._id])
    }
    else {
      this._id = 1;
      this._router.navigate(['/employees', this._id])
    }
  }

  changeEmployeeName(){        
    // this.employees[0].name = 'Jordan Cohen';  
    
    const newEmployeeArray : Employee[] = Object.assign([], this.employees);
    newEmployeeArray[0].name = 'Jordan Levine';
    this.employees = newEmployeeArray;
  }


}
