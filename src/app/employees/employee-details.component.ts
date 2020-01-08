import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})

export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  id : any;
  
  constructor(private _route: ActivatedRoute,
             private _employeeService: EmployeeService ) { }

  ngOnInit() {     
    const id =  this._route.snapshot.paramMap.get('id');
    console.log('this._route.snapshot.paramMap - id - ' + id)

    this.employee = this._employeeService.getEmployee(id);
    console.log('this.employee name - ' +  this.employee.name)

  }

}
