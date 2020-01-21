import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable, Subject, throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

 @Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  private _url: string = "assets/data/employee.json";
  private _url2: string = "https://ctb2013.scp.co.il:8443/foreignTrade/table/currencies";

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

  //  const url = `${environment.APP_API}/api/request`;

  // public headers = new HttpHeaders().set('header1', hvalue1); // create header object
  // headers = headers.append('header2', hvalue2); // add a new header, creating a new object
  // headers = headers.append('header3', hvalue3); // add another header

  // let params = new HttpParams().set('param1', value1); // create params object
  // params = params.append('param2', value2); // add a new param, creating a new object
  // params = params.append('param3', value3); // add another param 

    getEmployees(){
      const headers = new HttpHeaders({'X-IDB-bank':'discount','Access-Control-Allow-Origin':'*'});
      return this.http.get<Employee[]>(this._url, { headers: headers }); 
    }

    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }

}
