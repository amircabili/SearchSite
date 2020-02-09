import { Component, OnInit, Input, OnChanges,Output, SimpleChanges , EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.less']
})

export class DisplayEmployeeComponent implements OnInit, OnChanges {
  private _employee: Employee;
  private _employeeId: number;
  private selectedEmployeeId: number;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();


  @Input() searchTerm: string;

  @Input()
  set employeeId(val: number) {

    // console.log(' Previous  :' + (this._employee ? this._employee.name : 'NULL'));
    // console.log(' Current  :' + val.name);
    // console.log(' --------  employeeId  -------   employeeId changed from ' + 
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

  constructor(private _route: ActivatedRoute , private _router:Router){ }

  ngOnInit() { 
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id'); 
      
  }

  ngOnChanges(changes: SimpleChanges) {

    // for (const propName of Object.keys(changes)){
    //   const change = changes[propName];
    //   const from = JSON.stringify(change.previousValue)
    //   const to = JSON.stringify(change.currentValue)
    //  // console.log(propName + 'changed from - ' + from + ' to ' + to);
    // }

    //console.log(changes);
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    // console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
    // console.log('currentEmployee Current : ' + currentEmployee.name);
    // console.log("this.previousEmployee - " + previousEmployee)
  }

  // handleClick(){
  //     this.notify.emit(this.employee);
  // }

  getEmployeeNameAndGender(): string{
    return this.employee.name + ' ' + this.employee.gender;
  }

  viewEmployee() {
    this._router.navigate(['/employees', this.employeeId], {
      queryParams: { 'searchTerm': this.searchTerm  }
    });
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employeeId] );
  }


}
