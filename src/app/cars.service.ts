import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car.model';


@Injectable({
  providedIn: 'root'
})

export class CarService {

    constructor( private http: HttpClient ) { }

    private _url: string = "assets/data/cars-small.json";


    getCarsSmall2(){
      return this.http.get<any>(this._url)
      .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; }); 
    }

    getCarsSmall3(){
      return this.http.get<any>('assets/data/cars-medium.json')
      .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; }); 
    }


    getCarsSmall() {
    return this.http.get<any>('assets/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsMedium() {
    return this.http.get<any>('assets/data/cars-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsLarge() {
    return this.http.get<any>('assets/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsHuge() {
      return this.http.get<any>('assets/data/cars-huge.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }
}