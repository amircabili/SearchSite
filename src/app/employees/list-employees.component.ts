import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})

export class ListEmployeesComponent implements OnInit {
  public employees: Employee[];
  FilteredEmployees: Employee[];
  public searchTerm : string;
  public errorMsg;
  
  // get searchTerm(): string{
  //   return this._searchTerm;
  // }

  // set searchTerm(value: string){
  //   this._searchTerm = value;
  //   this.FilteredEmployees = this.filtereEmployees(value);
  // }

  // filtereEmployees(searchTerm : string){
  //   return this.employees.filter(employee=> 
  //     employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  // }

  constructor( private _employeeService: EmployeeService ) { }

  ngOnInit() { }

    clickSearchInput() {

      if(this.searchTerm){
        this._employeeService.getEmployees()
                    .subscribe(data => this.employees = data)
                        error => this.errorMsg = error;
        this.FilteredEmployees = this.employees;
      }
      else{
        location.reload();
      }
  }

  changeEmployeeName(){
      this.employees[0].name = 'Jordan';
    // const newEmployeeArray : Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[0].name = 'Jordan';
    // this.employees = newEmployeeArray;
  }

    clearSearchInput(){
      this.searchTerm = null;
      location.reload();
  }
<<<<<<< HEAD

=======
  
>>>>>>> 3487da4f9203dac784b69834c844c60d1ac8f206
}
