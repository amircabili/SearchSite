import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.less']
})

export class DisplayEmployeeComponent implements OnInit, OnChanges {

  private _employee: Employee;  

  @Input() 

  set employee(val: Employee){
    console.log('Current  :' + val.name);
    console.log('Previous  :' + (this._employee ? this._employee.name : 'NULL'));
    this._employee = val;
  }

  get employee(): Employee{
    return this._employee;
  }
  
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges){

      console.log(changes);
      const previousEmployee = <Employee>changes.employee.previousValue;
      const currentEmployee = <Employee>changes.employee.currentValue;

      // console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
      // console.log('currentEmployee Current : ' + currentEmployee.name);
      // console.log("this.previousEmployee - " + previousEmployee)
  }

}
