import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name;
  price;
  author;
}


@Injectable({
  providedIn: 'root'
})

export class BookService {

  // private _url: string = "assets/data/books.json";

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('assets/data/books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }

}
