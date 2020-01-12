import { Component, OnInit, SimpleChanges, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';


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
  // public dataFromChild: Employee;

  public previousEmployee: any;
  public currentEmployee: any;
  private arrayIndex = 1;

  public FilteredEmployees: Employee[];
  public searchTerm : string;
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

  constructor( private _employeeService: EmployeeService , private _router: Router) { }

    ngOnInit() {
      //this.buttonNext = false;
      //ShowAllEmployees();
     }

    clickSearchInput() {
      if(this.searchTerm){
        
        this._employeeService.getEmployees()
                    .subscribe(data => this.employees = data)
                        error => this.errorMsg = error;
            // this.FilteredEmployees = this.employees;
        }
        else{
          this._employeeService = null;
          location.reload();
        }
        //this.employeeToDisplay = this.employees[0];
      }

      ShowAllEmployees(){
        
        if(!this.searchTerm){
            this._employeeService.getEmployees()
              .subscribe(data => {
                            this.employees = data;
                 }) 
                  error => this.errorMsg = error;
                  this.arrayIndex= 0;                
        }
        
        // else{         
        //   this.searchTerm = null;
        //   this._employeeService.getEmployees()
        //     .subscribe(data => this.employees = data)
        //         error => this.errorMsg = error;
        // }
      }

      changeEmployeeName(){
          this.employees[0].name = 'Jordan';         
      }

      clearSearchInput(){
        this._employeeService = null;
          location.reload();
      }

      // nextEmployee(): void{
      //   if(this.arrayIndex <= 2){
      //     this.employees[0] = this.employees[this.arrayIndex];
      //     this.arrayIndex++;
      //   } else {
      //     //this.employeeToDisplay = this.employees[0];
      //     this.employees[this.arrayIndex] = this.employees[0];;
      //     this.arrayIndex= 1;
      //   }
      // }
       
      nextEmployee(): void {
          if( this.arrayIndex <  this.employees.length ){
            this.employeeToDisplay = this.employees[this.arrayIndex];
            // console.log("searchTerm - " + this.searchTerm)            
            // console.log("this.previousEmployee - " + this.previousEmployee)           
            this.arrayIndex++;
            this.searchTerm = this.employeeToDisplay.name
          }
          else{
            this.arrayIndex = 0;
            this.employeeToDisplay = this.employees[this.arrayIndex];
            this.searchTerm = this.employeeToDisplay.name;
          }
      }

      // handleNotify(eventData: Employee){
      //     this.dataFromChild = eventData;
      // }

      onClick(employeeId: number){
          this._router.navigate(['/employees',employeeId]);
      }

    }

