import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { TableListEntry } from './models/TablelListEntry.model';
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

export class DiscountTableEntryService {

   private _url: string = "https://ctb2013.scp.co.il:8443/foreignTrade/table/currencies";

  constructor( private http: HttpClient ) { }

 
    getTablelListEntry(){
      const headers = new HttpHeaders({'X-IDB-bank':'discount','Access-Control-Allow-Origin':'*'});
      return this.http.get<TableListEntry[]>(this._url, { headers: headers }); 
    }

    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }

    save(employee: TableListEntry) {
        //this.listEmployees.push(employee);
    }

 }
