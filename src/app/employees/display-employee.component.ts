import { Component, OnInit, Input, OnChanges,Output, SimpleChanges , EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.less']
})

export class DisplayEmployeeComponent implements OnInit, OnChanges {

  private _employee: Employee;
  private _employeeId: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  set employeeId(val: number) {
    
    // console.log('Previous  :' + (this._employee ? this._employee.name : 'NULL'));
    // console.log('Current  :' + val.name);
    // console.log( '--------employeeId-------   employeeId changed from ' + 
    //                 JSON.stringify(this._employeeId) + ' to ' +  JSON.stringify(val));

    this._employeeId = val;
  }

  get employeeId(): number {
    return this._employeeId;
  }

  @Input()
  set employee(val: Employee) {

//  console.log( '--------employee------- emplemployeeoyeeId changed from ' + 
//                     JSON.stringify(this._employee) + ' to ' +  JSON.stringify(val));

    this._employee = val;
  }

  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {

    // for (const propName of Object.keys(changes)){
    //   const change = changes[propName];
    //   const from = JSON.stringify(change.previousValue)
    //   const to = JSON.stringify(change.currentValue)
    //  // console.log(propName + 'changed from - ' + from + ' to ' + to);
    // }

    console.log(changes);
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    // console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
    // console.log('currentEmployee Current : ' + currentEmployee.name);
    // console.log("this.previousEmployee - " + previousEmployee)
  }


  handleClick(){
      this.notify.emit(this.employee.name);
  }

 
}
