import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {

  // dateOfBirth: Date = new Date(2018, 1, 28);
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

  constructor() {  
      this.datePickerConfig = Object.assign({}, {
        dateInputFormat: 'DD-MM-YYYY',
        containerClass: 'theme-blue' ,
        isAnimated: true ,
       });
  }

  ngOnInit() { 
  }

  saveEmployee(newEmployee: Employee):void{
      console.log(newEmployee); 
  }

  clearSearchInput(){
    //this.searchTerm = null;
    location.reload();
  }

    togglePhotoPreview(){
      this.previewPhoto = !this.previewPhoto;
    }

}
