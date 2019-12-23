import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {

  dateOfBirth: Date = new Date(2018, 1, 28);
  gender = 'male';
  isActive = true;
  department = 'HR';

  datePickerConfig : Partial< BsDatepickerConfig >;

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
        showWeekNumbers: false
      });
  }

  ngOnInit() { 
  }

  saveEmployee(empForm: NgForm):void{
      console.log(empForm.value); 
  }

  clearSearchInput(){
    //this.searchTerm = null;
    location.reload();
}

}
