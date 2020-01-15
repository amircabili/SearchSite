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
     // const newEmployee: Employee = Object.assign({},this.employee);
      // console.log('newEmployee - ' + newEmployee);

      console.log(this.employee);
      this._employeeService.save(this.employee);
      //this._router.navigate(['employees']);
  }


}
