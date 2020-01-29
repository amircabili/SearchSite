import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

import { Car } from '../models/car.model';
import { CarService } from '../cars.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MessageService } from 'primeng/api';
 

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.less'],
  animations: [ 
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0,
            background:'inherit'
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1,
            background:'inherit'
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
]
})

export class PrimeTableComponent implements OnInit {
 
  cars1: Car[];
  cars2: Car[];
  cols: any[];  

  selectedCar1: Car;
  selectedCar2: Car;
  selectedCar3: Car;
  selectedCar4: Car;
  selectedCars1: Car[];
  selectedCars2: Car[];
  selectedCars3: Car[];
 
  books: Book[];

    constructor( 
          private bookService: BookService,
          private carService: CarService,
          private messageService: MessageService
          
          ) { }
    
    ngOnInit() {

      this.bookService.getBooks().then(books => this.books = books);
      
      this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      this.carService.getCarsMedium().then(cars => this.cars2 = cars);

      this.cols = [
          { field: 'vin', header: 'Vin', width: '25%' },
          { field: 'year', header: 'Year', width: '25%' },
          { field: 'brand', header: 'Brand', width: '25%' },
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

  selectCarWithButton(car: Car) {
      this.selectedCar2 = car;
      this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin});
  }

  onRowSelect(event) {
      this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
  }

  onRowUnselect(event) {
      this.messageService.add({severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin});
  }
  
    showSuccess() {
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
    }

    showInfo() {
        this.messageService.add({severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this.messageService.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes'});
    }
  
}