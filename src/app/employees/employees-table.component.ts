

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material';


export interface DataTableItem {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
  icon:string;
}



const ELEMENT_DATA: DataTableItem[] = [
 { icon: ' ' ,  position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 15, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 25, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 32, name: 'Helium', weight: 4.0026, symbol: 'He' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 35, name: 'Boron', weight: 10.811, symbol: 'B' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
 { icon: ' ' ,  position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne' , description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`},
];

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EmployeesTableComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['weight', 'name', 'symbol', 'position', 'icon'];
  expandedElement: DataTableItem | null;

  dataSourceOne: MatTableDataSource<DataTableItem>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'icon'];

  @ViewChild('TableOnePaginator', { static: true }) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', { static: true }) tableOneSort: MatSort;

 
  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.dataSourceOne = new MatTableDataSource;

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
    this.dataSourceOne.data = ELEMENT_DATA;
    this.dataSourceOne.paginator = this.tableOnePaginator;
    this.dataSourceOne.sort = this.tableOneSort;

    
  }

   
}
