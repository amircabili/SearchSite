import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

import { Car } from '../models/car.model';
import { CarService } from '../cars.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.less'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})

export class PrimeTableComponent implements OnInit {
 
  cars1: Car[];
  cars2: Car[];
  cols: any[];  

  selectedCar1: Car;
  selectedCar2: Car;
 
  books: Book[];

    constructor( 
          private bookService: BookService,
          private carService: CarService
          ) { }
    
    ngOnInit() {

      this.bookService.getBooks().then(books => this.books = books);
      
      this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      this.carService.getCarsMedium().then(cars => this.cars2 = cars);

      this.cols = [
          { field: 'vin', header: 'Vin', width: '25%' },
          { field: 'year', header: 'Year', width: '15%' },
          { field: 'brand', header: 'Brand', width: '35%' },
          { field: 'color', header: 'Color', width: '25%' }
      ];
    }
    
  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }
  
}