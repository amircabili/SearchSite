import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})

export class CreateEmployeeComponent implements OnInit {

  // dateOfBirth: Date = new Date(2018, 1, 28);
  
  public   newEmployee: Employee ;

  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;

  gender = 'male';
  isActive = true;
  department = 'HR';
  photoPath = '../assets/images/image1.png';
  previewPhoto = false;

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
  
  departments : Department[] = [
    {id:1, name:'Help Desk'},
    {id:2, name:'HR'},
    {id:3, name:'IT'},
    {id:4, name:'PayRoll'}
  ];

  constructor(private _employeeService : EmployeeService, private _router: Router) {  
      this.datePickerConfig = Object.assign({}, {
        dateInputFormat: 'DD-MM-YYYY',
        containerClass: 'theme-blue' ,
        isAnimated: true ,
       });
  }

  ngOnInit() { 
  }


  clearSearchInput():void{
    // this.searchTerm = null;
    // location.reload();
      this._employeeService = null;
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  
  saveEmployee(){
      //console.log(this.employee);
      this.newEmployee  = Object.assign({},this.employee);

      this._employeeService.save(this.newEmployee);
      console.log('newEmployee - ' + this.newEmployee);

      this._router.navigate(['employee']);
  }


}
