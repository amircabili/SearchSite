import { Component, OnInit, SimpleChanges, Output, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})

export class ListEmployeesComponent implements OnInit {


  public employees: Employee[];
  public employee: any;
  public employee_id: any;
  public employeeToDisplay: any;
  filteredEmployees: Employee[];

  // public dataFromChild: Employee;

  public previousEmployee: any;
  public currentEmployee: any;
  private arrayIndex = 1;

  public FilteredEmployees: Employee[];

  public _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  public errorMsg: any;
  public buttonNext: boolean = true;

  // get searchTerm(): string{
  //   return this._searchTerm;
  // }
  // set searchTerm(value: string){
  //   this._searchTerm = value;
  //   this.FilteredEmployees = this.filtereEmployees(value);
  // }
  //// filtereEmployees(searchTerm : string){
  //   return this.employees.filter(employee=> 
  //     employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  // }

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {

    //this.buttonNext = false;
    
      this._employeeService.getEmployees().subscribe((data) => { 
        this.employees = data;
        console.log('Subscribe : ' + new Date().toTimeString());

              if (this._route.snapshot.queryParamMap.has('searchTerm')) {
                this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
              }
              else {
                this.filteredEmployees = this.employees;
                console.log('else : ' + new Date().toTimeString());
                console.log('----------------------------- '  );
              }
       })
      error => this.errorMsg = error;
      this.arrayIndex = 0;
       console.log('this._route.snapshot.queryParamMap.get( name ) ' + this._route.snapshot.queryParamMap.get('name'));

   }

  clickSearchInput() {
    console.log(this._searchTerm);

    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data)
          error => this.errorMsg = error;

    // this.FilteredEmployees = this.employees;
    //this.employeeToDisplay = this.employees[0];
  }

  ShowAllEmployees() {
    if (!this.searchTerm) {
      this._employeeService.getEmployees()
        .subscribe(data => {
        this.employees = data;
        })
      error => this.errorMsg = error;
      this.arrayIndex = 0;
    }
    this.searchTerm = '';

    console.log('this.employees  ' + this.employees);
    // else{         
    //   this.searchTerm = null;
    //   this._employeeService.getEmployees()
    //     .subscribe(data => this.employees = data)
    //         error => this.errorMsg = error;
    // }
  }

  clearSearchInput() {
    //this._employeeService = null;
   this.searchTerm = '';
    // if(this.employees!){
    //   this.employees = this.employees.splice(0,this.employees.length)
    // }
     //location.reload();
  }

  nextEmployee(): void {
    if (this.arrayIndex < this.employees.length) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      // console.log("searchTerm - " + this.searchTerm)            
      // console.log("this.previousEmployee - " + this.previousEmployee)           
      this.arrayIndex++;
      this.searchTerm = this.employeeToDisplay.name
    }
    else {
      this.arrayIndex = 0;
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.searchTerm = this.employeeToDisplay.name;
    }
  }

  // handleNotify(eventData: Employee){
  //     this.dataFromChild = eventData;
  // }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
    });
  }

  onMouseMove() {

  }

}

