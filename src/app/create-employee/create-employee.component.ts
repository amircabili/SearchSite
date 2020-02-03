import { Component, OnInit, ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Routes, Router } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less'] 
})


export class CreateEmployeeComponent implements OnInit {
  // dateOfBirth: Date = new Date(2018, 1, 28);
  
  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;

  gender = '';
  isActive = true;
  // department = 'HR';
  photoPath = '../assets/images/image1.png';
  previewPhoto = false;
  isFocused = false;
  public employees: any;

   
  text: string;

  public focusSettingEventEmitter = new EventEmitter<boolean>();


  datePickerConfig : Partial<BsDatepickerConfig>;

  employee: Employee = {
    id : null, 
    name : null,
    gender : null,
    email : null,
    phonenumber: null,
    contactPreference : null,
    dateOfBirth : null,
    department : 'select',
    isActive : null,
    photoPath : null
  };

  departments: Department[];
 
  selectedDepartment: Department;

  
  constructor(private _employeeService : EmployeeService, private _router: Router) {
      this.datePickerConfig = Object.assign({}, {
        dateInputFormat: 'DD-MM-YYYY',
        containerClass: 'theme-blue',
        isAnimated: true ,
       });

       this.departments  = [
        {id:1, name:'Help Desk'},
        {id:2, name:'HR'},
        {id:3, name:'IT'},
        {id:4, name:'PayRoll'},
        {id:5, name:'123'},
        {id:6, name:'4444444444'}
      ];

  }

  ngOnInit() {}
  
  clearSearchInput():void{
    // this.searchTerm = null;
    // location.reload();
      this._employeeService = null;
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(){
     // const newEmployee: Employee = Object.assign({},this.employee);
      // console.log('newEmployee - ' + newEmployee);
      //console.log(this.employee);
      this._employeeService.save(this.employee);
      //this._router.navigate(['employees']);
  }


    val: Employee;    
    results: Department[];

    SearchDepartment(event) {
            this.results= this.departments;
    }

 

    department1: SelectItem[];
    
 
  
    
 
  // searchInNames(event) 
  // {
  //   let query = event.query;
    
  //   return this._employeeService.getEmployeesNames()
  //         .then(data => { this.results = data})            
  //  }

    //  filteredNamesSingle: any[];
    // filteredNamesMultiple: any[];

    //  filterNamesSingle(event) {
    //       let query = event.query;
    //       this._employeeService.getEmployeesNames().then(employees => {
    //           this.filteredNamesSingle = this.filterName(query, employees);
    //       });
    //   }


    //  filterName(query, employees: any[]):any[] {
    //       //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    //       let filtered : any[] = [];
    //       for(let i = 0; i < employees.length; i++) {
    //           let employee = employees[i];
    //           if(employee.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //               filtered.push(employee);
    //           }
    //       }
    //       return filtered;
    //   }
}
