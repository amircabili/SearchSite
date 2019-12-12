import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})

export class SearchBarComponent implements OnInit {

public employees =  [];
public searchTerm : string; 

//  public filteredEmployees =  [];

//  private _searchTerm: string;
 
//  get searchTerm (): string{
//     return this._searchTerm;
//  }

//  set  searchTerm (value: string){
//     this._searchTerm = value;
//     this.filteredEmployees = this.filteredEmployees(value);
// }

// filteredEmployees(searchString: string){
//   return this.employees.filter(employee => employee.name.toLower)
// }



 public errorMsg;

 
  ngOnInit() {
    
  }

}
