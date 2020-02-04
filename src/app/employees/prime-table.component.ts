import { Component, OnInit , OnDestroy, OnChanges, SimpleChange, Input, ViewChild } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../book.service';
import { Car } from '../models/car.model';
import { CarService } from '../cars.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MessageService, LazyLoadEvent ,FilterMetadata} from 'primeng/api';
import {enableProdMode} from '@angular/core';
import { Table } from 'primeng/table/table';
import {autoTable,jsPDF} from 'jspdf';
import { PrintService } from '../print.service';
 
 
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

     @ViewChild('dt2', {static: false}) dt2: Table;

     filter(){
      this.dt2.reset();
     }

     columnFilter(event: any, field) {
      this.dt2.filter(event.target.value, field, 'contains');
    }
     
    cars: Car[];
    cars1: Car[];
    cars2: Car[];
    cars3: Car[];
    
    cols: any[];  

    selectedCar1: Car;
    selectedCar2: Car;
    selectedCar3: Car;
    selectedCar4: Car;

    selectedCars1: Car[];
    selectedCars2: Car[];
    selectedCars3: Car[];

    totalRecords: number;
    totalRecords3: number;

    loading: boolean;
    loading3: boolean;

    books: Book[];
    rows: any;
    sortF: string;

    data: Car[];

    invoiceIds: string[];
    invoiceDetails: Promise<any>[];
 
      constructor(      
            route: ActivatedRoute ,        
            private bookService: BookService,
            private carService: CarService,
            private messageService: MessageService,
            public printService: PrintService  
          ) { 
            
          }
    
    ngOnInit() {
 
      

 
      //this.bookService.getBooks().then(books => this.books = books);
      //this.carService.getCarsSmall().then(cars => this.cars1 = cars);
     // this.carService.getCarsMedium().then(cars => this.cars2 = cars);
      //datasource imitation

      this.getCarsSmall2TriggerAction();
     
      this.getCarsSmall3TriggerAction();
 
    //   this.cars3 = [
    //     {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    //     {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    //     {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    //     {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    //     {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    //     {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    //     {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    //     {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    //     {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    //     {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    //     {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    //     {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    //     {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    // ];
 

      this.cols = [
          { field: 'vin', header: 'Vin', width: '25%' },
          { field: 'year', header: 'Year', width: '25%' },
          { field: 'brand', header: 'Brand', width: '25%' },
          { field: 'color', header: 'Color', width: '25%' } 
      ];

      this.loading = true;
      this.loading3 = true;
    }
     
    changeSort(event) {
      if (!event.order) {
        this.sortF = 'identifier';
      } else {
        this.sortF = event.field;
        console.log(event.field);
      }
    }

    getCarsSmall2TriggerAction(){
        this.carService.getCarsSmall2().then(data => {
          this.cars2 = data;
          this.totalRecords = 22;
          console.log('carService totalRecords  getCarsSmall2TriggerAction ---> ' + this.cars2.length);
      });
    }

    getCarsSmall2_1_TriggerAction(eventFirst,eventRows){
      this.carService.getCarsSmall2_1(eventFirst,eventRows).then(data => {
        this.cars2 = data;
        this.totalRecords = 22;

        console.log('carService totalRecords  getCarsSmall2TriggerAction ---> ' + this.cars2.length);
    });
  }



    getCarsSmall3TriggerAction(){
        this.carService.getCarsSmall3().then(cars => {
          this.cars3 = cars;
          this.totalRecords3 = this.cars3.length;
          console.log('carService totalRecords3  getCarsSmall3TriggerAction ---> ' +  this.cars3.length);
      });
    }
    
    loadCarsLazy2(event: LazyLoadEvent) {
      this.loading = true;
 
      
          if (this.cars2) {
              console.log('this.cars2 OBJECT--->  - ' + this.cars2.length);


              this.getCarsSmall2_1_TriggerAction(event.first,event.first + event.rows);


              console.log(' event.first - ' +  event.first  + '   ' +  '(event.first + event.rows) - ' +   (event.first + event.rows)  );
               this.loading = false;

              //this.getCarsSmall2TriggerAction();

              console.log('this.cars2 OBJECT---> slice - ' + this.cars2.length);            }
            
                                       
      }

      loadPersonsLazy(event: LazyLoadEvent) {
        this.loading = true;
        this.carService.getCarsSmall3().then(cars=>
          {this.cars3=cars},
           
          () => {
            this.loading = false;
            console.log(`Info - getPersonList method succeeded. Results: ${JSON.stringify(this.cars)}`);
          })
      }


    loadCarsLazy3(event: LazyLoadEvent) {
        this.loading3 = true;
       

        setTimeout(() =>  {
          if (this.cars3)  {
              console.log('this.cars OBJECT---> ' + this.cars);
              console.log('event.first ---> ' + event.first);
              console.log('(event.first + event.rows)---> ' + (event.first + event.rows));
              console.log('slice(event.first, (event.first + event.rows) ' + ( this.cars3.slice(event.first, (event.first + event.rows))).length );
              console.log('this.cars before slice ' + this.cars);
              this.cars = this.cars3.slice(event.first, (event.first + event.rows));     
              console.log('this.cars after slice ' + this.cars);
              this.loading3 = false;
              this.getCarsSmall3TriggerAction();
              console.log('this.cars after slice OBJECT---> ' + this.cars);
           }
           console.log('loadCarsLazy3 cars3 length ---> ' + this.cars3.length);
       }, 900);

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
  
    exportPdf() {
      import("jspdf").then(jsPDF => {
          import("jspdf-autotable").then(x => {
              const doc = new jsPDF.default(0,0);
              doc.autoTable(this.cols, this.cars2);
              doc.save('primengTable.pdf');
              })
          })
      }

    exportExcel() {
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.getCars());
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "primengTable");
          });
      }


      saveAsExcelFile(buffer: any, fileName: string): void {
          import("file-saver").then(FileSaver => {
              let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
              let EXCEL_EXTENSION = '.xlsx';
              const data: Blob = new Blob([buffer], {
                  type: EXCEL_TYPE
              });
              FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          });
      }

      getCars() {
          let cars = [];
          for(let car of this.cars2) {
              car.year = car.year.toString();
              cars.push(car);
          }
          return cars;
      }

      printThis(){
          var myWindow = window.open("", "MsgWindow", "width=900,height=900, top=30% , left=500 ");
          myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p> <script type='text/javascript'>window.print();</script>");
         }
 
         onPrintInvoice() {
          const invoiceIds = ['101', '102','103'];
          this.printService
            .printDocument('invoice', invoiceIds);
        }
 
}