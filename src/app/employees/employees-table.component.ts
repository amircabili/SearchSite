import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';



export interface DataTableItem {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}


const ELEMENT_DATA: DataTableItem[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 32, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 35, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
  { position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
];

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EmployeesTableComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: DataTableItem | null;

  dataSourceOne: MatTableDataSource<DataTableItem>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description'];

  @ViewChild('TableOnePaginator', { static: true }) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', { static: true }) tableOneSort: MatSort;

 
  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }

  constructor() {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit() {
    this.dataSourceOne.data = ELEMENT_DATA;
    this.dataSourceOne.paginator = this.tableOnePaginator;
    this.dataSourceOne.sort = this.tableOneSort;
  }


  panelOpenState = false;
 
}
