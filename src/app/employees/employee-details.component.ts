import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  public _id : number;

  constructor(
                private _route: ActivatedRoute,
                private _employeeService: EmployeeService,
                private _router: Router
              ) { }

  ngOnInit() { 
      this.subscribeEmployee()

      console.log('this._route.snapshot.paramMap - id ------- ' + this._id)
      console.log('this.employee --------- ' +  this.employee);
  }

  subscribeEmployee(){

    this._id = +this._route.snapshot.paramMap.get('id');

    this._employeeService.getEmployees()
        .subscribe(data => {
                      this.employees = data;
                      this.employee = this.employees[this._id-1] ;
            })
    }

  viewNextEmployee(){
    
    if(this._id < this.employees.length){

      this._id = this._id +1;   
      this.subscribeEmployee()

      this._router.navigate(['/employees', this._id])
     
    }
    else{
      alert(+this._id > this.employees.length)
      alert(+this._id < this.employees.length)
      this._id = 1;  
    }

  }
}
