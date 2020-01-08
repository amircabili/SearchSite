import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable, Subject, throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _url: string = "assets/data/employee.json";
  
  constructor( private http: HttpClient ) { }

  // getEmployees(){
  //   return this.http.get<Employee[]>(this._url)
  //             .catch(this.errorHandler);     
  // }

  private listEmployees : Employee[] = [
    
    {
      "id" : 1,
      "name" : " David Cohen",
      "gender" : "זכר",
      "email" : "avic@gmail.com",
      "phonenumber" : 123123123,
      "contactPreference" : "זכר",
      "dateOfBirth" : "20/10/2001",
      "department" : "IT", 
      "isActive" : true,
      "photoPath" : "זכר"
  },
  {
    "id": 2,
    "name" : "ערן רמים",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 3,
    "name" : "אניהוד רחמים",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 4,
    "name" : "דודי כהנים",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 5,
    "name" : "דורי טלפו",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 6,
    "name" : "אבירם כהן",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 7,
    "name" : "איציק לוי",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 8,
    "name" : "jhon billy",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 9,
    "name" : "דוד רונן",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 10,
    "name" : "אופיר לוי",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 11,
    "name" : "דודו אהאוני",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 12,
    "name" : "אבשלום חן   ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 13,
    "name" : "איציק חסן  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 14,
    "name" : "דודי אבינעם  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 15,
    "name" : "חסן כהן  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 16,
    "name" : "בני הדייג  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 17,
    "name" : "בני דוידי  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  },
  {
    "id": 18,
    "name" : "יעקב  ",
    "gender" : "זכר",
    "email" : "avic@gmail.com",
    "phonenumber" : 546164455,
    "contactPreference" : "זכר",
    "dateOfBirth" : "20/10/2001",
    "department" : "IT",
    "isActive" : true,
    "photoPath" : "זכר"
  }
  ]  

  getEmployees(){
    return this.http.get<Employee[]>(this._url); 
  }

  getEmployee(id : any): Observable<Employee>  {
    //return this.http.get<Employee[]>(this._url); 
    console.log(' <Employee> - ' + this.http.get<Employee>(this._url).find(e=>e.id === id))
    return this.http.get<Employee>(this._url).find(e=>e.id === id) ; 
  }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  save(employee: Employee) {
      this.listEmployees.push(employee);
  }

}
