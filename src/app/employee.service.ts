import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable, Subject, throwError} from 'rxjs';
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

  constructor( private http: HttpClient ) { }

  getEmployees(){
    return  this.http.get<Employee[]>(this._url)
              .catch(this.errorHandler);     
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }


}
