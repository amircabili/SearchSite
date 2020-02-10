import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Employee } from './models/employee.model';
import {  Subject, throwError, of } from 'rxjs';
import 'rxjs/add/operator/map'
import { pipe } from 'rxjs';
import { map ,timeout , startWith} from 'rxjs/operators';

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Observable} from 'rxjs/observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const CACHE_KEY = 'httpRepoCach'

 @Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  private _url: string = "assets/data/employee.json";
   baseUrl: any;
     allEmployees:any;
   public employees: any ;
   emp : Employee[]  ;

   public tempEmployee :any;
   public tempAllEmployee :any[];

  //private _url2: string = "https://ctb2013.scp.co.il:8443/foreignTrade/table/currencies";

  constructor( private http: HttpClient ) { 

    // this.allEmployees = this.http.get<Employee[]>(this._url).delay(1400)
    // .pipe(
    //       timeout(1000)
    // );

    // this.allEmployees.subscribe(next => {
    //   localStorage[CACHE_KEY] = JSON.stringify(next);
    // });

    // this.allEmployees = this.allEmployees.pipe(
    //     startWith( JSON.parse(localStorage[CACHE_KEY] || '[]' ))
    //   )
  }



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

  

              // getEmployee(id: number){
              //   console.log(this.http.get<Employee>(this._url).delay(400).find(e => e.id ===id) )

              //   return this.http.get<Employee>(this._url).delay(400).find(e => e.id ===id)    
              //   .pipe(
              //     timeout(1800)
              //   );
              // }
  
    getEmployees(){
      return this.http.get<Employee[]>(this._url).delay(400)
      .pipe(
        timeout(1800)
      );
    }

    getEmployee(this_id:number):Observable<Employee>{   
       
        this.getEmployees().subscribe((data) => {
        this.tempAllEmployee = data;        
        for(let i = 0; i < this.tempAllEmployee.length; i++) {          
            if(this.tempAllEmployee[i].id == this_id){
              this.tempEmployee = this.tempAllEmployee[i]; 
              console.log('  this.tempEmployee ********** ------->  : ' + this.tempEmployee.name  );                                
            }           
          } 
        })
        //console.log('  this.tempEmployee ********** ------->  : ' + this.tempEmployee.name  ); 
            return  this.tempEmployee
      }

      results: string[];         
      errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
      }
  
      save(employee: Employee) {
        this.getEmployees().subscribe((data) => {
          this.tempAllEmployee = data;  

      if(employee.id == null){
                const maxid = this.tempAllEmployee.reduce(function (e1,e2){
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
                employee.id = maxid + 1;
                this.tempAllEmployee.push(employee);
            }else{
                const foundIndex = this.listEmployees.findIndex(e => e.id ===employee.id) 
                this.tempAllEmployee[foundIndex] = employee;
                console.log('this.tempEmployee ********** ------->  : ' + this.tempEmployee.name  ); 
                console.log(' this.tempAllEmployee[foundIndex] ********** ------->  : ' +  this.tempAllEmployee[foundIndex] );   
                console.log('this.listEmployees.findIndex(e => e.id ===employee.id)   : ' + this.listEmployees.findIndex(e => e.id ===employee.id)   );                                          
            }
          }
        )
      }

    deleteEmployee(id:number) {
        this.getEmployees().subscribe((data) => {
          this.tempAllEmployee = data;  
          const foundIndex = this.listEmployees.findIndex(e => e.id ===id);
                if(foundIndex != -1){
                    this.tempAllEmployee.splice(foundIndex, 1);
                }
        })
      }


    private initializeEmployee(): Employee {  
      return {  
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
    }  

  
 
    // getEmployee2(id: any)  {  

    //   this.getEmployees()
    //     .subscribe(data => {
    //       this.employees = data;
    //     })
 
    //     this.employees.forEach(function (value) {
    //       console.log(value);
    //     }); 

    // }  
     
    //  getEmployees() : Observable<Employee[]>{
    //      //return this.http.get<Employee[]>(this._url);      
    //      return Observable.of(this.listEmployees).delay(200);
    //  }
 
   

}
